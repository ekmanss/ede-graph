import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CancelDecreasePosition,
  CancelIncreasePosition,
  CreateDecreasePosition,
  CreateIncreasePosition,
  DecreasePositionReferral,
  ExecuteDecreasePosition,
  ExecuteIncreasePosition,
  IncreasePositionReferral,
  SetAdmin,
  SetDelayValues,
  SetDepositFee,
  SetIncreasePositionBufferBps,
  SetIsLeverageEnabled,
  SetMaxGlobalSizes,
  SetMinExecutionFee,
  SetPositionKeeper,
  SetReferralStorage,
  SetRequestKeysStartValues,
  WithdrawFees
} from "../generated/PositionRouter/PositionRouter"

export function createCancelDecreasePositionEvent(
  account: Address,
  path: Array<Address>,
  indexToken: Address,
  collateralDelta: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  receiver: Address,
  acceptablePrice: BigInt,
  minOut: BigInt,
  executionFee: BigInt,
  blockGap: BigInt,
  timeGap: BigInt
): CancelDecreasePosition {
  let cancelDecreasePositionEvent = changetype<CancelDecreasePosition>(
    newMockEvent()
  )

  cancelDecreasePositionEvent.parameters = new Array()

  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDelta",
      ethereum.Value.fromUnsignedBigInt(collateralDelta)
    )
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "acceptablePrice",
      ethereum.Value.fromUnsignedBigInt(acceptablePrice)
    )
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("minOut", ethereum.Value.fromUnsignedBigInt(minOut))
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "executionFee",
      ethereum.Value.fromUnsignedBigInt(executionFee)
    )
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockGap",
      ethereum.Value.fromUnsignedBigInt(blockGap)
    )
  )
  cancelDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "timeGap",
      ethereum.Value.fromUnsignedBigInt(timeGap)
    )
  )

  return cancelDecreasePositionEvent
}

export function createCancelIncreasePositionEvent(
  account: Address,
  path: Array<Address>,
  indexToken: Address,
  amountIn: BigInt,
  minOut: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  acceptablePrice: BigInt,
  executionFee: BigInt,
  blockGap: BigInt,
  timeGap: BigInt
): CancelIncreasePosition {
  let cancelIncreasePositionEvent = changetype<CancelIncreasePosition>(
    newMockEvent()
  )

  cancelIncreasePositionEvent.parameters = new Array()

  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("minOut", ethereum.Value.fromUnsignedBigInt(minOut))
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "acceptablePrice",
      ethereum.Value.fromUnsignedBigInt(acceptablePrice)
    )
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "executionFee",
      ethereum.Value.fromUnsignedBigInt(executionFee)
    )
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockGap",
      ethereum.Value.fromUnsignedBigInt(blockGap)
    )
  )
  cancelIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "timeGap",
      ethereum.Value.fromUnsignedBigInt(timeGap)
    )
  )

  return cancelIncreasePositionEvent
}

export function createCreateDecreasePositionEvent(
  account: Address,
  path: Array<Address>,
  indexToken: Address,
  collateralDelta: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  receiver: Address,
  acceptablePrice: BigInt,
  minOut: BigInt,
  executionFee: BigInt,
  index: BigInt,
  blockNumber: BigInt,
  blockTime: BigInt
): CreateDecreasePosition {
  let createDecreasePositionEvent = changetype<CreateDecreasePosition>(
    newMockEvent()
  )

  createDecreasePositionEvent.parameters = new Array()

  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDelta",
      ethereum.Value.fromUnsignedBigInt(collateralDelta)
    )
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "acceptablePrice",
      ethereum.Value.fromUnsignedBigInt(acceptablePrice)
    )
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("minOut", ethereum.Value.fromUnsignedBigInt(minOut))
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "executionFee",
      ethereum.Value.fromUnsignedBigInt(executionFee)
    )
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockNumber",
      ethereum.Value.fromUnsignedBigInt(blockNumber)
    )
  )
  createDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockTime",
      ethereum.Value.fromUnsignedBigInt(blockTime)
    )
  )

  return createDecreasePositionEvent
}

export function createCreateIncreasePositionEvent(
  account: Address,
  path: Array<Address>,
  indexToken: Address,
  amountIn: BigInt,
  minOut: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  acceptablePrice: BigInt,
  executionFee: BigInt,
  index: BigInt,
  blockNumber: BigInt,
  blockTime: BigInt,
  gasPrice: BigInt
): CreateIncreasePosition {
  let createIncreasePositionEvent = changetype<CreateIncreasePosition>(
    newMockEvent()
  )

  createIncreasePositionEvent.parameters = new Array()

  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("minOut", ethereum.Value.fromUnsignedBigInt(minOut))
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "acceptablePrice",
      ethereum.Value.fromUnsignedBigInt(acceptablePrice)
    )
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "executionFee",
      ethereum.Value.fromUnsignedBigInt(executionFee)
    )
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockNumber",
      ethereum.Value.fromUnsignedBigInt(blockNumber)
    )
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockTime",
      ethereum.Value.fromUnsignedBigInt(blockTime)
    )
  )
  createIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "gasPrice",
      ethereum.Value.fromUnsignedBigInt(gasPrice)
    )
  )

  return createIncreasePositionEvent
}

export function createDecreasePositionReferralEvent(
  account: Address,
  sizeDelta: BigInt,
  marginFeeBasisPoints: BigInt,
  referralCode: Bytes,
  referrer: Address
): DecreasePositionReferral {
  let decreasePositionReferralEvent = changetype<DecreasePositionReferral>(
    newMockEvent()
  )

  decreasePositionReferralEvent.parameters = new Array()

  decreasePositionReferralEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  decreasePositionReferralEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  decreasePositionReferralEvent.parameters.push(
    new ethereum.EventParam(
      "marginFeeBasisPoints",
      ethereum.Value.fromUnsignedBigInt(marginFeeBasisPoints)
    )
  )
  decreasePositionReferralEvent.parameters.push(
    new ethereum.EventParam(
      "referralCode",
      ethereum.Value.fromFixedBytes(referralCode)
    )
  )
  decreasePositionReferralEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )

  return decreasePositionReferralEvent
}

export function createExecuteDecreasePositionEvent(
  account: Address,
  path: Array<Address>,
  indexToken: Address,
  collateralDelta: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  receiver: Address,
  acceptablePrice: BigInt,
  minOut: BigInt,
  executionFee: BigInt,
  blockGap: BigInt,
  timeGap: BigInt
): ExecuteDecreasePosition {
  let executeDecreasePositionEvent = changetype<ExecuteDecreasePosition>(
    newMockEvent()
  )

  executeDecreasePositionEvent.parameters = new Array()

  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralDelta",
      ethereum.Value.fromUnsignedBigInt(collateralDelta)
    )
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "acceptablePrice",
      ethereum.Value.fromUnsignedBigInt(acceptablePrice)
    )
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam("minOut", ethereum.Value.fromUnsignedBigInt(minOut))
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "executionFee",
      ethereum.Value.fromUnsignedBigInt(executionFee)
    )
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockGap",
      ethereum.Value.fromUnsignedBigInt(blockGap)
    )
  )
  executeDecreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "timeGap",
      ethereum.Value.fromUnsignedBigInt(timeGap)
    )
  )

  return executeDecreasePositionEvent
}

export function createExecuteIncreasePositionEvent(
  account: Address,
  path: Array<Address>,
  indexToken: Address,
  amountIn: BigInt,
  minOut: BigInt,
  sizeDelta: BigInt,
  isLong: boolean,
  acceptablePrice: BigInt,
  executionFee: BigInt,
  blockGap: BigInt,
  timeGap: BigInt
): ExecuteIncreasePosition {
  let executeIncreasePositionEvent = changetype<ExecuteIncreasePosition>(
    newMockEvent()
  )

  executeIncreasePositionEvent.parameters = new Array()

  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("path", ethereum.Value.fromAddressArray(path))
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("minOut", ethereum.Value.fromUnsignedBigInt(minOut))
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "acceptablePrice",
      ethereum.Value.fromUnsignedBigInt(acceptablePrice)
    )
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "executionFee",
      ethereum.Value.fromUnsignedBigInt(executionFee)
    )
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "blockGap",
      ethereum.Value.fromUnsignedBigInt(blockGap)
    )
  )
  executeIncreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "timeGap",
      ethereum.Value.fromUnsignedBigInt(timeGap)
    )
  )

  return executeIncreasePositionEvent
}

export function createIncreasePositionReferralEvent(
  account: Address,
  sizeDelta: BigInt,
  marginFeeBasisPoints: BigInt,
  referralCode: Bytes,
  referrer: Address
): IncreasePositionReferral {
  let increasePositionReferralEvent = changetype<IncreasePositionReferral>(
    newMockEvent()
  )

  increasePositionReferralEvent.parameters = new Array()

  increasePositionReferralEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  increasePositionReferralEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  increasePositionReferralEvent.parameters.push(
    new ethereum.EventParam(
      "marginFeeBasisPoints",
      ethereum.Value.fromUnsignedBigInt(marginFeeBasisPoints)
    )
  )
  increasePositionReferralEvent.parameters.push(
    new ethereum.EventParam(
      "referralCode",
      ethereum.Value.fromFixedBytes(referralCode)
    )
  )
  increasePositionReferralEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )

  return increasePositionReferralEvent
}

export function createSetAdminEvent(admin: Address): SetAdmin {
  let setAdminEvent = changetype<SetAdmin>(newMockEvent())

  setAdminEvent.parameters = new Array()

  setAdminEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return setAdminEvent
}

export function createSetDelayValuesEvent(
  minBlockDelayKeeper: BigInt,
  minTimeDelayPublic: BigInt,
  maxTimeDelay: BigInt
): SetDelayValues {
  let setDelayValuesEvent = changetype<SetDelayValues>(newMockEvent())

  setDelayValuesEvent.parameters = new Array()

  setDelayValuesEvent.parameters.push(
    new ethereum.EventParam(
      "minBlockDelayKeeper",
      ethereum.Value.fromUnsignedBigInt(minBlockDelayKeeper)
    )
  )
  setDelayValuesEvent.parameters.push(
    new ethereum.EventParam(
      "minTimeDelayPublic",
      ethereum.Value.fromUnsignedBigInt(minTimeDelayPublic)
    )
  )
  setDelayValuesEvent.parameters.push(
    new ethereum.EventParam(
      "maxTimeDelay",
      ethereum.Value.fromUnsignedBigInt(maxTimeDelay)
    )
  )

  return setDelayValuesEvent
}

export function createSetDepositFeeEvent(depositFee: BigInt): SetDepositFee {
  let setDepositFeeEvent = changetype<SetDepositFee>(newMockEvent())

  setDepositFeeEvent.parameters = new Array()

  setDepositFeeEvent.parameters.push(
    new ethereum.EventParam(
      "depositFee",
      ethereum.Value.fromUnsignedBigInt(depositFee)
    )
  )

  return setDepositFeeEvent
}

export function createSetIncreasePositionBufferBpsEvent(
  increasePositionBufferBps: BigInt
): SetIncreasePositionBufferBps {
  let setIncreasePositionBufferBpsEvent = changetype<
    SetIncreasePositionBufferBps
  >(newMockEvent())

  setIncreasePositionBufferBpsEvent.parameters = new Array()

  setIncreasePositionBufferBpsEvent.parameters.push(
    new ethereum.EventParam(
      "increasePositionBufferBps",
      ethereum.Value.fromUnsignedBigInt(increasePositionBufferBps)
    )
  )

  return setIncreasePositionBufferBpsEvent
}

export function createSetIsLeverageEnabledEvent(
  isLeverageEnabled: boolean
): SetIsLeverageEnabled {
  let setIsLeverageEnabledEvent = changetype<SetIsLeverageEnabled>(
    newMockEvent()
  )

  setIsLeverageEnabledEvent.parameters = new Array()

  setIsLeverageEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "isLeverageEnabled",
      ethereum.Value.fromBoolean(isLeverageEnabled)
    )
  )

  return setIsLeverageEnabledEvent
}

export function createSetMaxGlobalSizesEvent(
  tokens: Array<Address>,
  longSizes: Array<BigInt>,
  shortSizes: Array<BigInt>
): SetMaxGlobalSizes {
  let setMaxGlobalSizesEvent = changetype<SetMaxGlobalSizes>(newMockEvent())

  setMaxGlobalSizesEvent.parameters = new Array()

  setMaxGlobalSizesEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromAddressArray(tokens))
  )
  setMaxGlobalSizesEvent.parameters.push(
    new ethereum.EventParam(
      "longSizes",
      ethereum.Value.fromUnsignedBigIntArray(longSizes)
    )
  )
  setMaxGlobalSizesEvent.parameters.push(
    new ethereum.EventParam(
      "shortSizes",
      ethereum.Value.fromUnsignedBigIntArray(shortSizes)
    )
  )

  return setMaxGlobalSizesEvent
}

export function createSetMinExecutionFeeEvent(
  minExecutionFee: BigInt
): SetMinExecutionFee {
  let setMinExecutionFeeEvent = changetype<SetMinExecutionFee>(newMockEvent())

  setMinExecutionFeeEvent.parameters = new Array()

  setMinExecutionFeeEvent.parameters.push(
    new ethereum.EventParam(
      "minExecutionFee",
      ethereum.Value.fromUnsignedBigInt(minExecutionFee)
    )
  )

  return setMinExecutionFeeEvent
}

export function createSetPositionKeeperEvent(
  account: Address,
  isActive: boolean
): SetPositionKeeper {
  let setPositionKeeperEvent = changetype<SetPositionKeeper>(newMockEvent())

  setPositionKeeperEvent.parameters = new Array()

  setPositionKeeperEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  setPositionKeeperEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )

  return setPositionKeeperEvent
}

export function createSetReferralStorageEvent(
  referralStorage: Address
): SetReferralStorage {
  let setReferralStorageEvent = changetype<SetReferralStorage>(newMockEvent())

  setReferralStorageEvent.parameters = new Array()

  setReferralStorageEvent.parameters.push(
    new ethereum.EventParam(
      "referralStorage",
      ethereum.Value.fromAddress(referralStorage)
    )
  )

  return setReferralStorageEvent
}

export function createSetRequestKeysStartValuesEvent(
  increasePositionRequestKeysStart: BigInt,
  decreasePositionRequestKeysStart: BigInt
): SetRequestKeysStartValues {
  let setRequestKeysStartValuesEvent = changetype<SetRequestKeysStartValues>(
    newMockEvent()
  )

  setRequestKeysStartValuesEvent.parameters = new Array()

  setRequestKeysStartValuesEvent.parameters.push(
    new ethereum.EventParam(
      "increasePositionRequestKeysStart",
      ethereum.Value.fromUnsignedBigInt(increasePositionRequestKeysStart)
    )
  )
  setRequestKeysStartValuesEvent.parameters.push(
    new ethereum.EventParam(
      "decreasePositionRequestKeysStart",
      ethereum.Value.fromUnsignedBigInt(decreasePositionRequestKeysStart)
    )
  )

  return setRequestKeysStartValuesEvent
}

export function createWithdrawFeesEvent(
  token: Address,
  receiver: Address,
  amount: BigInt
): WithdrawFees {
  let withdrawFeesEvent = changetype<WithdrawFees>(newMockEvent())

  withdrawFeesEvent.parameters = new Array()

  withdrawFeesEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawFeesEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  withdrawFeesEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawFeesEvent
}
