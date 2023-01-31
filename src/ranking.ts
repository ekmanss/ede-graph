import { BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";

import {
  ActivePosition,
  ActivePositionFlag,
  ClosedPosition,
  ClosedPositionPnl,
  DecreasePosition,
  IncreasePosition,
  IndependentUser,
  LeaderBoardAccount,
  Liquidation,
  Pnl,
  PositionKeyAccount,
  Summary,
  Trade,
  UpdatePosition,
} from "../generated/schema";
import {
  ClosePosition as ClosePositionEvent,
  DecreasePosition as DecreasePositionEvent,
  IncreasePosition as IncreasePositionEvent,
  LiquidatePosition as LiquidatePositionEvent,
  Swap as SwapEvent,
  UpdatePnl as UpdatePnlEvent,
  UpdatePosition as UpdatePositionEvent,
} from "../generated/Vault/Vault";

let Decimal0 = BigDecimal.fromString("0");
let Big0 = BigInt.fromI32(0);
let totalRoundId = "100";

// product
let round1Start = BigInt.fromI32(1670655600);
let round1End = BigInt.fromI32(1673334000);
let round2Start = BigInt.fromI32(1673427600);
let round2End = BigInt.fromI32(1675846800);

let defaultTime = BigInt.fromI32(1673334001);
export let PRECISION = BigInt.fromI32(10).pow(30);

function getRoundId(blockTime: BigInt): string {
  if (blockTime >= round1Start && blockTime <= round1End) {
    return "1";
  }
  if (blockTime >= round2Start && blockTime <= round2End) {
    return "2";
  }

  return "99";
}

function getRoundStart(blockTime: BigInt): BigInt {
  if (blockTime >= round1Start && blockTime <= round1End) {
    return round1Start;
  }
  if (blockTime >= round2Start && blockTime <= round2End) {
    return round2Start;
  }

  return defaultTime;
}

function getRoundEnd(blockTime: BigInt): BigInt {
  if (blockTime >= round1Start && blockTime <= round1End) {
    return round1End;
  }

  if (blockTime >= round2Start && blockTime <= round2End) {
    return round2End;
  }
  return defaultTime;
}

function storeLiquidatePosition(event: LiquidatePositionEvent): void {
  let id = event.transaction.hash.toHexString();
  let liquidation = new Liquidation(id);

  liquidation.account = event.params.account.toHexString();
  liquidation.blockNumber = event.params._event.block.number;
  liquidation.txhash = event.params._event.transaction.hash.toHexString();
  liquidation.timestamp = event.params._event.block.timestamp;

  liquidation.collateralToken = event.params.collateralToken.toHexString();
  liquidation.indexToken = event.params.indexToken.toHexString();
  liquidation.isLong = event.params.isLong;
  liquidation.size = event.params.size;
  liquidation.collateral = event.params.collateral;
  liquidation.reserveAmount = event.params.reserveAmount;
  liquidation.realisedPnl = event.params.realisedPnl;
  liquidation.markPrice = event.params.markPrice;

  liquidation.save();
}

export function handleLiquidatePosition(event: LiquidatePositionEvent): void {
  storeLiquidatePosition(event);
  saveTrade(event);
  storeSummary(event.params._event.block.timestamp, event.params.size);
  _updatePositionInLiquidation(event);
}

function saveTrade(event: LiquidatePositionEvent): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);
  if (event.params.isLong) {
    trade.action = "LiquidatePosition-Long";
  } else {
    trade.action = "LiquidatePosition-Short";
  }

  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.key = event.params.key.toHexString();
  trade.isLong = event.params.isLong;
  trade.size = event.params.size;
  trade.collateral = event.params.collateral;
  trade.reserveAmount = event.params.reserveAmount;
  trade.realisedPnl = event.params.realisedPnl;
  trade.markPrice = event.params.markPrice;
  trade.save();
}

function _storeClosedPositionPnl(event: ClosePositionEvent): void {
  let blockTime = event.params._event.block.timestamp;
  let roundStart = getRoundStart(blockTime);
  let roundEnd = getRoundEnd(blockTime);
  let roundId = getRoundId(blockTime);

  if (blockTime.gt(roundStart) && blockTime.lt(roundEnd)) {
    let id = event.params.account.toHexString();
    let closedPositionPnl = ClosedPositionPnl.load(id);
    if (closedPositionPnl == null) {
      closedPositionPnl = new ClosedPositionPnl(id);
      closedPositionPnl.amount = BigInt.fromI32(0);
    }
    closedPositionPnl.amount =
      closedPositionPnl.amount + event.params.realisedPnl;
    closedPositionPnl.save();
  }
}
export function handleClosePosition(event: ClosePositionEvent): void {
  _storeClosedPositionPnl(event);
  let id =
    event.transaction.hash.toHexString() +
    "-" +
    event.params.account.toHexString() +
    "-" +
    event.logIndex.toString();
  let closedPosition = new ClosedPosition(id);

  closedPosition.account = event.params.account.toHexString();
  closedPosition.blockNumber = event.params._event.block.number;
  closedPosition.txhash = event.params._event.transaction.hash.toHexString();
  closedPosition.timestamp = event.params._event.block.timestamp;
  closedPosition.key = event.params.key;
  closedPosition.size = event.params.size;
  closedPosition.collateral = event.params.collateral;
  closedPosition.averagePrice = event.params.averagePrice;
  closedPosition.entryFundingRate = event.params.entryFundingRate;
  closedPosition.reserveAmount = event.params.reserveAmount;
  closedPosition.realisedPnl = event.params.realisedPnl;
  closedPosition.save();
  // storeSummary(event.params._event.block.timestamp, event.params.size);
  _updatePositionInClosedPosition(event);
}

function updateLeaderBoardInIncrease(event: IncreasePositionEvent): void {
  let blockTime = event.block.timestamp;
  let roundId = getRoundId(blockTime);

  let id = roundId + "-" + event.params.account.toHexString();
  let leaderBoard = LeaderBoardAccount.load(id);
  if (leaderBoard == null) {
    leaderBoard = new LeaderBoardAccount(id);
    leaderBoard.address = event.params.account.toHexString();
    leaderBoard.roundId = roundId;
    leaderBoard.pnl = Big0;
    leaderBoard.pnlPercent = Big0;
  }
  leaderBoard.pnl = leaderBoard.pnl - event.params.fee;
  leaderBoard.save();
}
// save pk position info and total summary
export function handleIncreasePosition(event: IncreasePositionEvent): void {
  let blockTime = event.block.timestamp;
  let roundId = getRoundId(blockTime);

  // update summary
  let summary = Summary.load(roundId);
  if (summary == null) {
    summary = new Summary(roundId);
    summary.totalTraders = 0;
    summary.totalVolumes = BigInt.fromI32(0);
  }

  // 存储所有的volume
  storeSummary(event.params._event.block.timestamp, event.params.sizeDelta);
  updateLeaderBoardInIncrease(event);


  let roundStart = getRoundStart(blockTime);
  let roundEnd = getRoundEnd(blockTime);

  // store origin
  let id =
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString();
  let increasePosition = new IncreasePosition(id);
  increasePosition.blockNumber = event.params._event.block.number;
  increasePosition.txhash = event.params._event.transaction.hash.toHexString();
  increasePosition.timestamp = event.params._event.block.timestamp;
  increasePosition.key = event.params.key;
  increasePosition.account = event.params.account.toHexString();
  increasePosition.collateralToken = event.params.collateralToken.toHexString();
  increasePosition.indexToken = event.params.indexToken.toHexString();
  increasePosition.collateralDelta = event.params.collateralDelta;
  increasePosition.collateralDeltaInDecimal = event.params.collateralDelta
    .toBigDecimal()
    .div(PRECISION.toBigDecimal());
  increasePosition.sizeDelta = event.params.sizeDelta;
  increasePosition.isLong = event.params.isLong;
  increasePosition.price = event.params.price;
  increasePosition.fee = event.params.fee;
  increasePosition.roundId = roundId;
  increasePosition.save();
  _storeOriginPkMap(event);

  let accountStr = event.params.account.toHexString();



  let independentUserId = roundId + "-" + accountStr;
  let independentUser = IndependentUser.load(independentUserId);
  if (independentUser == null) {
    independentUser = new IndependentUser(independentUserId);
    independentUser.startTime = event.params._event.block.timestamp;
    independentUser.save();
    summary.totalTraders += 1;
    summary.latestUpdateAt = blockTime;
    summary.save();
  }
}

function getAccountByPositionKey(positionKey: string): string {
  let pkmap = PositionKeyAccount.load(positionKey);
  if (pkmap == null) {
    return "ede";
  }
  return pkmap.account.toHexString();
}

function _storeOriginPkMap(event: IncreasePositionEvent): void {
  let pkmapId = event.params.key.toHexString();
  let pkmap = PositionKeyAccount.load(pkmapId);

  if (pkmap == null) {
    pkmap = new PositionKeyAccount(pkmapId);
    pkmap.account = event.params.account;
    pkmap.collateralToken = event.params.collateralToken;
    pkmap.indexToken = event.params.indexToken;
    pkmap.isLong = event.params.isLong;
    pkmap.initBlockNumber = event.params._event.block.number;
    pkmap.collateralRemaining = BigInt.fromI32(0);
    pkmap.totalSize = BigInt.fromI32(0);
  }

  // total size in current position
  pkmap.totalSize = pkmap.totalSize.plus(event.params.sizeDelta);

  // total collateralRemaining in current position
  pkmap.collateralRemaining = pkmap.collateralRemaining.plus(
    event.params.collateralDelta
  );
  pkmap.save();
}

function updateLeaderBoardInDecrease(event: DecreasePositionEvent): void {
  let blockTime = event.block.timestamp;
  let roundId = getRoundId(blockTime);

  let id = roundId + "-" + event.params.account.toHexString();
  let leaderBoard = LeaderBoardAccount.load(id);
  if (leaderBoard == null) {
    leaderBoard = new LeaderBoardAccount(id);
    leaderBoard.address = event.params.account.toHexString();
    leaderBoard.roundId = roundId;
    leaderBoard.pnl = Big0;
    leaderBoard.pnlPercent = Big0;
  }
  leaderBoard.pnl = leaderBoard.pnl - event.params.fee;
  leaderBoard.save();
}

// TODO 这里要记录时间段内的lastCollateral，并且在用户closedPosition的时候更新为0
export function handleDecreasePosition(event: DecreasePositionEvent): void {
  updateLeaderBoardInDecrease(event);
  let decreasePositionId =
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString();
  let decreasePosition = new DecreasePosition(decreasePositionId);

  decreasePosition.blockNumber = event.params._event.block.number;
  decreasePosition.txhash = event.params._event.transaction.hash.toHexString();
  decreasePosition.timestamp = event.params._event.block.timestamp;
  decreasePosition.key = event.params.key;
  decreasePosition.account = event.params.account.toHexString();
  decreasePosition.collateralToken = event.params.collateralToken.toHexString();
  decreasePosition.indexToken = event.params.indexToken.toHexString();
  decreasePosition.collateralDelta = event.params.collateralDelta;
  decreasePosition.sizeDelta = event.params.sizeDelta;
  decreasePosition.isLong = event.params.isLong;
  decreasePosition.price = event.params.price;
  decreasePosition.fee = event.params.fee;
  decreasePosition.latestCollateral = event.params.latestCollatral;
  decreasePosition.previousCollateral = event.params.prevCollateral;
  decreasePosition.save();

  // 存储所有的volume
  storeSummary(event.params._event.block.timestamp, event.params.sizeDelta);
}

// 只在特定的时间里调用
function updateLeaderBoardInUpdatePnl(event: UpdatePnlEvent): void {
  let blockTime = event.block.timestamp;
  let roundId = getRoundId(blockTime);
  let address = getAccountByPositionKey(event.params.key.toHexString());

  let id = roundId + "-" + address;
  let leaderBoard = LeaderBoardAccount.load(id);
  if (leaderBoard == null) {
    leaderBoard = new LeaderBoardAccount(id);
    leaderBoard.address = address;
    leaderBoard.roundId = roundId;
    leaderBoard.pnl = Big0;
    leaderBoard.pnlPercent = Big0;
  }

  if (event.params.hasProfit) {
    leaderBoard.pnl = leaderBoard.pnl + event.params.delta;
  } else {
    leaderBoard.pnl = leaderBoard.pnl - event.params.delta;
  }

  leaderBoard.save();
}

function storePnl(event: UpdatePnlEvent): void {
  let id =
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString();

  let pnl = new Pnl(id);
  pnl.blockNumber = event.params._event.block.number;
  pnl.key = event.params.key;
  pnl.hasProfit = event.params.hasProfit;
  pnl.delta = event.params.delta;

  pnl.size = event.params.currentSize;
  pnl.collateral = event.params.currentCollateral;
  pnl.usdOut = event.params.usdOut;
  pnl.usdOutAfterFee = event.params.usdOutAfterFee;
  pnl.realisedPnl = BigInt.fromI32(0);

  let pkMap = PositionKeyAccount.load(event.params.key.toHexString());
  if (pkMap != null) {
    pnl.account = pkMap.account.toHexString();
    pnl.save();
  }
}

export function handleUpdatePnl(event: UpdatePnlEvent): void {
  storePnl(event);

  updateLeaderBoardInUpdatePnl(event);
}

function _storeUpdatePosition(event: UpdatePositionEvent): void {
  let id = event.params.key.toHexString();
  let updatePosition = new UpdatePosition(id);
  updatePosition.timestamp = event.block.timestamp;
  updatePosition.txhash = event.transaction.hash.toHexString();
  updatePosition.blockNumber = event.block.number;

  updatePosition.key = event.params.key;
  updatePosition.size = event.params.size;
  updatePosition.collateral = event.params.collateral;
  updatePosition.averagePrice = event.params.averagePrice;
  updatePosition.entryFundingRate = event.params.entryFundingRate;
  updatePosition.reserveAmount = event.params.reserveAmount;
  updatePosition.realisedPnl = event.params.realisedPnl;
  updatePosition.account = event.params.account.toHexString();
  updatePosition.markPrice = event.params.markPrice;

  updatePosition.total = BigInt.fromI32(0);

  updatePosition.save();
}

export function handleUpdatePosition(event: UpdatePositionEvent): void {
  _storeUpdatePosition(event);
  let entity = new ActivePosition(event.params.key.toHexString());
  let flagId = event.params.key.toHexString();
  let flag = ActivePositionFlag.load(flagId);
  if (flag == null) {
    flag = new ActivePositionFlag(flagId);
    flag.save();
    entity.timestamp = event.params._event.block.timestamp;
  }

  entity.account = event.params.account.toHexString();
  entity.size = BintToBdecimal(event.params.size);
  entity.collateral = BintToBdecimal(event.params.collateral);
  entity.averagePrice = BintToBdecimal(event.params.averagePrice);
  entity.entryFundingRate = event.params.entryFundingRate.toBigDecimal();
  entity.reserveAmount = BintToBdecimal(event.params.reserveAmount);
  entity.realisedPnl = BintToBdecimal(event.params.realisedPnl);
  entity.markPrice = BintToBdecimal(event.params.markPrice);
  entity.status = 1;
  entity.liquidationPrice = Decimal0;
  // load key account map to query _isLong
  let pkmap = PositionKeyAccount.load(event.params.key.toHexString());
  if (pkmap != null) {
    // calc liquidationPrice
    let liquidationAmount = entity.size.div(BigDecimal.fromString("100"));

    // gt collateral
    let liquidationDelta = Decimal0;
    if (liquidationAmount.gt(entity.collateral)) {
      liquidationDelta = liquidationAmount.minus(entity.collateral);
    } else {
      liquidationDelta = entity.collateral.minus(liquidationAmount);
    }

    let priceDelta = liquidationDelta
      .times(entity.averagePrice)
      .div(entity.size);
    if (pkmap.isLong) {
      entity.liquidationPrice = entity.averagePrice.minus(priceDelta);
      entity.isLong = true;
    } else {
      entity.liquidationPrice = entity.averagePrice.plus(priceDelta);
      entity.isLong = false;
    }
    // this may occurred some error during the pkmap not loaded yet
    entity.indexToken = pkmap.indexToken.toHexString();
    entity.collateralToken = pkmap.collateralToken.toHexString();
  }

  entity.save();
}

// set active position status
function _updatePositionInLiquidation(event: LiquidatePositionEvent): void {
  let entity = ActivePosition.load(event.params.key.toHexString());
  if (entity != null) {
    entity.status = 2;
    entity.save();
  }
}

function _updatePositionInClosedPosition(event: ClosePositionEvent): void {
  let entity = ActivePosition.load(event.params.key.toHexString());
  if (entity != null) {
    entity.status = 3;
    entity.save();
  }
}

function BintToBdecimal(expandedBigint: BigInt): BigDecimal {
  return expandedBigint.toBigDecimal().div(
    BigInt.fromI32(10)
      .pow(30)
      .toBigDecimal()
  );
}

// todo this does not store price
export function handleSwap(event: SwapEvent): void {
  // storeSummary(event.params._event.block.timestamp, event.params.amountIn);
}

function storeSummary(timestamp: BigInt, amount: BigInt): void {
  storeTotalSummary(timestamp, amount);
  storeRoundSummary(timestamp, amount);
}

// TODO  replace all
function storeTotalSummary(timestamp: BigInt, amount: BigInt): void {
  log.warning("timestamp: {}", [timestamp.toHexString()]);
  // 存储所有的volume
  let totalSummary = Summary.load(totalRoundId);
  if (totalSummary == null) {
    totalSummary = new Summary(totalRoundId);
    totalSummary.totalTraders = 0;
    totalSummary.totalVolumes = BigInt.fromI32(0);
    totalSummary.latestUpdateAt = timestamp;
  }
  totalSummary.totalVolumes = totalSummary.totalVolumes.plus(amount);
  totalSummary.latestUpdateAt = timestamp;

  totalSummary.save();
}

function storeRoundSummary(timestamp: BigInt, amount: BigInt): void {
  // 存储所有的volume
  let roundStart = getRoundStart(timestamp);
  let roundEnd = getRoundEnd(timestamp);
  let roundId = getRoundId(timestamp);

  if (timestamp.gt(roundStart) && timestamp.lt(roundEnd)) {
    let summary = Summary.load(roundId);
    if (summary == null) {
      summary = new Summary(roundId);
      summary.totalTraders = 0;
      summary.totalVolumes = BigInt.fromI32(0);
    }
    summary.latestUpdateAt = timestamp;
    summary.totalVolumes = summary.totalVolumes.plus(amount);
    summary.save();
  }
}
