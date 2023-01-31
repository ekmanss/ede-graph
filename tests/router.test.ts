import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { RouterSwap } from "../generated/schema"
import { RouterSwap as RouterSwapEvent } from "../generated/Router/Router"
import { handleRouterSwap } from "../src/router"
import { createRouterSwapEvent } from "./router-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenIn = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenOut = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amountIn = BigInt.fromI32(234)
    let amountOut = BigInt.fromI32(234)
    let newRouterSwapEvent = createRouterSwapEvent(
      account,
      tokenIn,
      tokenOut,
      amountIn,
      amountOut
    )
    handleRouterSwap(newRouterSwapEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("RouterSwap created and stored", () => {
    assert.entityCount("RouterSwap", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "RouterSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "RouterSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenIn",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "RouterSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenOut",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "RouterSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountIn",
      "234"
    )
    assert.fieldEquals(
      "RouterSwap",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountOut",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
