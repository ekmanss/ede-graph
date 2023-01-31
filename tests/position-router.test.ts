import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CancelDecreasePosition } from "../generated/schema"
import { CancelDecreasePosition as CancelDecreasePositionEvent } from "../generated/PositionRouter/PositionRouter"
import { handleCancelDecreasePosition } from "../src/position-router"
import { createCancelDecreasePositionEvent } from "./position-router-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let path = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let indexToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let collateralDelta = BigInt.fromI32(234)
    let sizeDelta = BigInt.fromI32(234)
    let isLong = "boolean Not implemented"
    let receiver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let acceptablePrice = BigInt.fromI32(234)
    let minOut = BigInt.fromI32(234)
    let executionFee = BigInt.fromI32(234)
    let blockGap = BigInt.fromI32(234)
    let timeGap = BigInt.fromI32(234)
    let newCancelDecreasePositionEvent = createCancelDecreasePositionEvent(
      account,
      path,
      indexToken,
      collateralDelta,
      sizeDelta,
      isLong,
      receiver,
      acceptablePrice,
      minOut,
      executionFee,
      blockGap,
      timeGap
    )
    handleCancelDecreasePosition(newCancelDecreasePositionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CancelDecreasePosition created and stored", () => {
    assert.entityCount("CancelDecreasePosition", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "path",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "indexToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collateralDelta",
      "234"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sizeDelta",
      "234"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isLong",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "receiver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "acceptablePrice",
      "234"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "minOut",
      "234"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "executionFee",
      "234"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "blockGap",
      "234"
    )
    assert.fieldEquals(
      "CancelDecreasePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timeGap",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
