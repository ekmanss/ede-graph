import {
  CancelDecreasePosition as CancelDecreasePositionEvent,
  CancelIncreasePosition as CancelIncreasePositionEvent,
  CreateDecreasePosition as CreateDecreasePositionEvent,
  CreateIncreasePosition as CreateIncreasePositionEvent,
  ExecuteDecreasePosition as ExecuteDecreasePositionEvent,
} from "../generated/PositionRouter/PositionRouter";

import {
  CancelDecreaseOrder as CancelDecreaseOrderEvent,
  CancelIncreaseOrder as CancelIncreaseOrderEvent,
  CreateDecreaseOrder as CreateDecreaseOrderEvent,
  CreateIncreaseOrder as CreateIncreaseOrderEvent,
  UpdateDecreaseOrder as UpdateDecreaseOrderEvent,
  UpdateIncreaseOrder as UpdateIncreaseOrderEvent,
} from "../generated/OrderBook/OrderBook";

import { Swap as SwapEvent } from "../generated/Router/Router";

import { ExecutedDecreasePosition, Trade } from "../generated/schema";

export function handleCreateIncreasePosition(
  event: CreateIncreasePositionEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CreateIncreasePosition";
  let account = event.params.account.toHexString();
  trade.account = account;
  trade.blockNumber = event.params.blockNumber;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params.blockTime;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.acceptablePrice = event.params.acceptablePrice;

  trade.save();
}

export function handleCreateDecreasePosition(
  event: CreateDecreasePositionEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CreateDecreasePosition";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params.blockNumber;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params.blockTime;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.acceptablePrice = event.params.acceptablePrice;

  trade.save();
}

export function handleCancelIncreasePosition(
  event: CancelIncreasePositionEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CancelIncreasePosition";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.acceptablePrice = event.params.acceptablePrice;

  trade.save();
}

export function handleCancelDecreasePosition(
  event: CancelDecreasePositionEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CancelDecreasePosition";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.acceptablePrice = event.params.acceptablePrice;

  trade.save();
}

// OrderBook
// ref to `[
//     "CreateIncreaseOrder",
//     "CancelIncreaseOrder",
//     "UpdateIncreaseOrder",
//     "CreateDecreaseOrder",
//     "CancelDecreaseOrder",
//     "UpdateDecreaseOrder",
//   ].includes(tradeData.action)`

export function handleCancelDecreaseOrder(
  event: CancelDecreaseOrderEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CancelDecreaseOrder";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.triggerAboveThreshold = event.params.triggerAboveThreshold;
  trade.triggerPrice = event.params.triggerPrice;
  trade.save();
}

export function handleCreateIncreaseOrder(
  event: CreateIncreaseOrderEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CreateIncreaseOrder";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.triggerAboveThreshold = event.params.triggerAboveThreshold;
  trade.triggerPrice = event.params.triggerPrice;
  trade.save();
}

export function handleCancelIncreaseOrder(
  event: CancelIncreaseOrderEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CancelIncreaseOrder";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.triggerAboveThreshold = event.params.triggerAboveThreshold;
  trade.triggerPrice = event.params.triggerPrice;
  trade.save();
}

export function handleUpdateIncreaseOrder(
  event: UpdateIncreaseOrderEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "UpdateIncreaseOrder";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.triggerAboveThreshold = event.params.triggerAboveThreshold;
  trade.triggerPrice = event.params.triggerPrice;
  trade.save();
}

export function handleCreateDecreaseOrder(
  event: CreateDecreaseOrderEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "CreateDecreaseOrder";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.triggerAboveThreshold = event.params.triggerAboveThreshold;
  trade.triggerPrice = event.params.triggerPrice;
  trade.save();
}

export function handleUpdateDecreaseOrder(
  event: UpdateDecreaseOrderEvent
): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "UpdateDecreaseOrder";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.indexToken = event.params.indexToken.toHexString();
  trade.isLong = event.params.isLong;
  trade.sizeDelta = event.params.sizeDelta;
  trade.triggerAboveThreshold = event.params.triggerAboveThreshold;
  trade.triggerPrice = event.params.triggerPrice;
  trade.save();
}

export function handleSwap(event: SwapEvent): void {
  let id = event.transaction.hash.toHexString();
  let trade = new Trade(id);

  trade.action = "Swap";
  trade.account = event.params.account.toHexString();
  trade.blockNumber = event.params._event.block.number;
  trade.txhash = event.params._event.transaction.hash.toHexString();
  trade.timestamp = event.params._event.block.timestamp;

  trade.tokenIn = event.params.tokenIn.toHexString();
  trade.tokenOut = event.params.tokenOut.toHexString();
  trade.amountIn = event.params.amountIn;
  trade.amountOut = event.params.amountOut;
  trade.save();
}

export function handleExecuteDecreasePosition(
  event: ExecuteDecreasePositionEvent
): void {
  let id = event.transaction.hash.toHexString();
  let decreasePosition = new ExecutedDecreasePosition(id);

  decreasePosition.blockNumber = event.params._event.block.number;
  decreasePosition.txhash = event.params._event.transaction.hash.toHexString();
  decreasePosition.timestamp = event.params._event.block.timestamp;
  let account = event.params.account.toHexString();
  decreasePosition.account = account;
  decreasePosition.indexToken = event.params.indexToken.toHexString();
  decreasePosition.collateralDelta = event.params.collateralDelta;
  decreasePosition.sizeDelta = event.params.sizeDelta;
  decreasePosition.isLong = event.params.isLong;
  decreasePosition.receiver = event.params.receiver.toHexString();
  decreasePosition.acceptablePrice = event.params.acceptablePrice;
  decreasePosition.minOut = event.params.minOut;
  decreasePosition.executionFee = event.params.executionFee;
  decreasePosition.blockGap = event.params.blockGap;
  decreasePosition.timeGap = event.params.timeGap;

  decreasePosition.save();
}

// key,
// _account,
// _collateralToken,
// _indexToken,
// _isLong,
// position.size,
// position.collateral,
// position.reserveAmount,
// position.realisedPnl,
// markPrice
