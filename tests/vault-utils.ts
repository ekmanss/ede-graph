import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BuyUSDX,
  ClosePosition,
  CollectMarginFees,
  CollectSwapFees,
  DecreaseGuaranteedUsd,
  DecreasePoolAmount,
  DecreasePosition,
  DecreaseReservedAmount,
  DirectPoolDeposit,
  IncreaseGuaranteedUsd,
  IncreasePoolAmount,
  IncreasePosition,
  IncreaseReservedAmount,
  LiquidatePosition,
  SellUSDX,
  Swap,
  UpdateFundingRate,
  UpdatePnl,
  UpdatePosition
} from "../generated/Vault/Vault"

export function createBuyUSDXEvent(
  account: Address,
  token: Address,
  tokenAmount: BigInt,
  usdxAmount: BigInt,
  feeBasisPoints: BigInt
): BuyUSDX {
  let buyUsdxEvent = changetype<BuyUSDX>(newMockEvent())

  buyUsdxEvent.parameters = new Array()

  buyUsdxEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  buyUsdxEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  buyUsdxEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  buyUsdxEvent.parameters.push(
    new ethereum.EventParam(
      "usdxAmount",
      ethereum.Value.fromUnsignedBigInt(usdxAmount)
    )
  )
  buyUsdxEvent.parameters.push(
    new ethereum.EventParam(
      "feeBasisPoints",
      ethereum.Value.fromUnsignedBigInt(feeBasisPoints)
    )
  )

  return buyUsdxEvent
}

export function createClosePositionEvent(
  key: Bytes,
  account: Address,
  size: BigInt,
  collateral: BigInt,
  averagePrice: BigInt,
  entryFundingRate: BigInt,
  reserveAmount: BigInt,
  realisedPnl: BigInt
): ClosePosition {
  let closePositionEvent = changetype<ClosePosition>(newMockEvent())

  closePositionEvent.parameters = new Array()

  closePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "averagePrice",
      ethereum.Value.fromUnsignedBigInt(averagePrice)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "entryFundingRate",
      ethereum.Value.fromUnsignedBigInt(entryFundingRate)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "reserveAmount",
      ethereum.Value.fromUnsignedBigInt(reserveAmount)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "realisedPnl",
      ethereum.Value.fromSignedBigInt(realisedPnl)
    )
  )

  return closePositionEvent
}

export function createCollectMarginFeesEvent(
  token: Address,
  feeUsd: BigInt,
  feeTokens: BigInt
): CollectMarginFees {
  let collectMarginFeesEvent = changetype<CollectMarginFees>(newMockEvent())

  collectMarginFeesEvent.parameters = new Array()

  collectMarginFeesEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  collectMarginFeesEvent.parameters.push(
    new ethereum.EventParam("feeUsd", ethereum.Value.fromUnsignedBigInt(feeUsd))
  )
  collectMarginFeesEvent.parameters.push(
    new ethereum.EventParam(
      "feeTokens",
      ethereum.Value.fromUnsignedBigInt(feeTokens)
    )
  )

  return collectMarginFeesEvent
}

export function createCollectSwapFeesEvent(
  token: Address,
  feeUsd: BigInt,
  feeTokens: BigInt
): CollectSwapFees {
  let collectSwapFeesEvent = changetype<CollectSwapFees>(newMockEvent())

  collectSwapFeesEvent.parameters = new Array()

  collectSwapFeesEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  collectSwapFeesEvent.parameters.push(
    new ethereum.EventParam("feeUsd", ethereum.Value.fromUnsignedBigInt(feeUsd))
  )
  collectSwapFeesEvent.parameters.push(
    new ethereum.EventParam(
      "feeTokens",
      ethereum.Value.fromUnsignedBigInt(feeTokens)
    )
  )

  return collectSwapFeesEvent
}

export function createDecreaseGuaranteedUsdEvent(
  token: Address,
  amount: BigInt
): DecreaseGuaranteedUsd {
  let decreaseGuaranteedUsdEvent = changetype<DecreaseGuaranteedUsd>(
    newMockEvent()
  )

  decreaseGuaranteedUsdEvent.parameters = new Array()

  decreaseGuaranteedUsdEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  decreaseGuaranteedUsdEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return decreaseGuaranteedUsdEvent
}

export function createDecreasePoolAmountEvent(
  token: Address,
  amount: BigInt
): DecreasePoolAmount {
  let decreasePoolAmountEvent = changetype<DecreasePoolAmount>(newMockEvent())

  decreasePoolAmountEvent.parameters = new Array()

  decreasePoolAmountEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  decreasePoolAmountEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return decreasePoolAmountEvent
}

export function createDecreasePositionEvent(
  key: Bytes,
  account: Address,
  collateralToken: Address,
  indexToken: Address,
  collateralDelta: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  price: BigInt,
  fee: BigInt,
  usdOut: BigInt,
  latestCollatral: BigInt
): DecreasePosition {
  let decreasePositionEvent = changetype<DecreasePosition>(newMockEvent())

  decreasePositionEvent.parameters = new Array()

  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDelta",
      ethereum.Value.fromUnsignedBigInt(collateralDelta)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("usdOut", ethereum.Value.fromUnsignedBigInt(usdOut))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "latestCollatral",
      ethereum.Value.fromUnsignedBigInt(latestCollatral)
    )
  )

  return decreasePositionEvent
}

export function createDecreaseReservedAmountEvent(
  token: Address,
  amount: BigInt
): DecreaseReservedAmount {
  let decreaseReservedAmountEvent = changetype<DecreaseReservedAmount>(
    newMockEvent()
  )

  decreaseReservedAmountEvent.parameters = new Array()

  decreaseReservedAmountEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  decreaseReservedAmountEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return decreaseReservedAmountEvent
}

export function createDirectPoolDepositEvent(
  token: Address,
  amount: BigInt
): DirectPoolDeposit {
  let directPoolDepositEvent = changetype<DirectPoolDeposit>(newMockEvent())

  directPoolDepositEvent.parameters = new Array()

  directPoolDepositEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  directPoolDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return directPoolDepositEvent
}

export function createIncreaseGuaranteedUsdEvent(
  token: Address,
  amount: BigInt
): IncreaseGuaranteedUsd {
  let increaseGuaranteedUsdEvent = changetype<IncreaseGuaranteedUsd>(
    newMockEvent()
  )

  increaseGuaranteedUsdEvent.parameters = new Array()

  increaseGuaranteedUsdEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  increaseGuaranteedUsdEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return increaseGuaranteedUsdEvent
}

export function createIncreasePoolAmountEvent(
  token: Address,
  amount: BigInt
): IncreasePoolAmount {
  let increasePoolAmountEvent = changetype<IncreasePoolAmount>(newMockEvent())

  increasePoolAmountEvent.parameters = new Array()

  increasePoolAmountEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  increasePoolAmountEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return increasePoolAmountEvent
}

export function createIncreasePositionEvent(
  key: Bytes,
  account: Address,
  collateralToken: Address,
  indexToken: Address,
  collateralDelta: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  price: BigInt,
  fee: BigInt
): IncreasePosition {
  let increasePositionEvent = changetype<IncreasePosition>(newMockEvent())

  increasePositionEvent.parameters = new Array()

  increasePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDelta",
      ethereum.Value.fromUnsignedBigInt(collateralDelta)
    )
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return increasePositionEvent
}

export function createIncreaseReservedAmountEvent(
  token: Address,
  amount: BigInt
): IncreaseReservedAmount {
  let increaseReservedAmountEvent = changetype<IncreaseReservedAmount>(
    newMockEvent()
  )

  increaseReservedAmountEvent.parameters = new Array()

  increaseReservedAmountEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  increaseReservedAmountEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return increaseReservedAmountEvent
}

export function createLiquidatePositionEvent(
  key: Bytes,
  account: Address,
  collateralToken: Address,
  indexToken: Address,
  isLong: boolean,
  size: BigInt,
  collateral: BigInt,
  reserveAmount: BigInt,
  realisedPnl: BigInt,
  markPrice: BigInt
): LiquidatePosition {
  let liquidatePositionEvent = changetype<LiquidatePosition>(newMockEvent())

  liquidatePositionEvent.parameters = new Array()

  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "reserveAmount",
      ethereum.Value.fromUnsignedBigInt(reserveAmount)
    )
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "realisedPnl",
      ethereum.Value.fromSignedBigInt(realisedPnl)
    )
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "markPrice",
      ethereum.Value.fromUnsignedBigInt(markPrice)
    )
  )

  return liquidatePositionEvent
}

export function createSellUSDXEvent(
  account: Address,
  token: Address,
  usdxAmount: BigInt,
  tokenAmount: BigInt,
  feeBasisPoints: BigInt
): SellUSDX {
  let sellUsdxEvent = changetype<SellUSDX>(newMockEvent())

  sellUsdxEvent.parameters = new Array()

  sellUsdxEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  sellUsdxEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  sellUsdxEvent.parameters.push(
    new ethereum.EventParam(
      "usdxAmount",
      ethereum.Value.fromUnsignedBigInt(usdxAmount)
    )
  )
  sellUsdxEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  sellUsdxEvent.parameters.push(
    new ethereum.EventParam(
      "feeBasisPoints",
      ethereum.Value.fromUnsignedBigInt(feeBasisPoints)
    )
  )

  return sellUsdxEvent
}

export function createSwapEvent(
  account: Address,
  tokenIn: Address,
  tokenOut: Address,
  amountIn: BigInt,
  amountOut: BigInt,
  amountOutAfterFees: BigInt,
  feeBasisPoints: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tokenIn", ethereum.Value.fromAddress(tokenIn))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tokenOut", ethereum.Value.fromAddress(tokenOut))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountOutAfterFees",
      ethereum.Value.fromUnsignedBigInt(amountOutAfterFees)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "feeBasisPoints",
      ethereum.Value.fromUnsignedBigInt(feeBasisPoints)
    )
  )

  return swapEvent
}

export function createUpdateFundingRateEvent(
  token: Address,
  fundingRate: BigInt
): UpdateFundingRate {
  let updateFundingRateEvent = changetype<UpdateFundingRate>(newMockEvent())

  updateFundingRateEvent.parameters = new Array()

  updateFundingRateEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  updateFundingRateEvent.parameters.push(
    new ethereum.EventParam(
      "fundingRate",
      ethereum.Value.fromUnsignedBigInt(fundingRate)
    )
  )

  return updateFundingRateEvent
}

export function createUpdatePnlEvent(
  key: Bytes,
  hasProfit: boolean,
  delta: BigInt,
  currentSize: BigInt,
  currentCollateral: BigInt,
  usdOut: BigInt,
  usdOutAfterFee: BigInt
): UpdatePnl {
  let updatePnlEvent = changetype<UpdatePnl>(newMockEvent())

  updatePnlEvent.parameters = new Array()

  updatePnlEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  updatePnlEvent.parameters.push(
    new ethereum.EventParam("hasProfit", ethereum.Value.fromBoolean(hasProfit))
  )
  updatePnlEvent.parameters.push(
    new ethereum.EventParam("delta", ethereum.Value.fromUnsignedBigInt(delta))
  )
  updatePnlEvent.parameters.push(
    new ethereum.EventParam(
      "currentSize",
      ethereum.Value.fromUnsignedBigInt(currentSize)
    )
  )
  updatePnlEvent.parameters.push(
    new ethereum.EventParam(
      "currentCollateral",
      ethereum.Value.fromUnsignedBigInt(currentCollateral)
    )
  )
  updatePnlEvent.parameters.push(
    new ethereum.EventParam("usdOut", ethereum.Value.fromUnsignedBigInt(usdOut))
  )
  updatePnlEvent.parameters.push(
    new ethereum.EventParam(
      "usdOutAfterFee",
      ethereum.Value.fromUnsignedBigInt(usdOutAfterFee)
    )
  )

  return updatePnlEvent
}

export function createUpdatePositionEvent(
  key: Bytes,
  account: Address,
  size: BigInt,
  collateral: BigInt,
  averagePrice: BigInt,
  entryFundingRate: BigInt,
  reserveAmount: BigInt,
  realisedPnl: BigInt,
  markPrice: BigInt
): UpdatePosition {
  let updatePositionEvent = changetype<UpdatePosition>(newMockEvent())

  updatePositionEvent.parameters = new Array()

  updatePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "averagePrice",
      ethereum.Value.fromUnsignedBigInt(averagePrice)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "entryFundingRate",
      ethereum.Value.fromUnsignedBigInt(entryFundingRate)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "reserveAmount",
      ethereum.Value.fromUnsignedBigInt(reserveAmount)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "realisedPnl",
      ethereum.Value.fromSignedBigInt(realisedPnl)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "markPrice",
      ethereum.Value.fromUnsignedBigInt(markPrice)
    )
  )

  return updatePositionEvent
}
