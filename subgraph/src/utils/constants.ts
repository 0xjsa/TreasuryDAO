import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x8c30fA625151Ea3719E54565af897E281932F110'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export const STATUS_PENDING = "PENDING";
export const STATUS_CANCELLED = "CANCELLED";
export const STATUS_EXECUTED = "EXECUTED";
export const STATUS_QUEUED = "QUEUED";
export const STATUS_ACTIVE = "ACTIVE";