import { JSBI, Price, Token } from '@pancakeswap/sdk'
import getRatePercentageDifference from './getRatePercentageDifference'
import { getRatePercentageMessage, PercentageDirection } from './getRatePercentageMessage'

const MIND = new Token(56, '0x258Ea33a949D8562A2683e1C54D4bAeAd2949F9E', 18, 'MIND', 'PancakeSwap Token')
const BUSD = new Token(56, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD')

const EIGHTEEN_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
const ONE = JSBI.multiply(JSBI.BigInt(1), EIGHTEEN_DECIMALS)
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const SEVEN = JSBI.multiply(JSBI.BigInt(7), EIGHTEEN_DECIMALS)
const SEVEN_HUNDRED = JSBI.multiply(JSBI.BigInt(700), EIGHTEEN_DECIMALS)
const ELEVEN = JSBI.multiply(JSBI.BigInt(11), EIGHTEEN_DECIMALS)

const ONE_BUSD_PER_MIND = new Price(MIND, BUSD, EIGHTEEN_DECIMALS, ONE)
const FIVE_BUSD_PER_MIND = new Price(MIND, BUSD, EIGHTEEN_DECIMALS, FIVE)
const SEVEN_BUSD_PER_MIND = new Price(MIND, BUSD, EIGHTEEN_DECIMALS, SEVEN)
const ELEVEN_BUSD_PER_MIND = new Price(MIND, BUSD, EIGHTEEN_DECIMALS, ELEVEN)
const SEVEN_HUNDRED_BUSD_PER_MIND = new Price(MIND, BUSD, EIGHTEEN_DECIMALS, SEVEN_HUNDRED)

const mockT = (key: string, data?: { percentage?: string }) => {
  return key.includes('%percentage%') ? key.replace('%percentage%', data.percentage) : key
}

describe('limitOrders/utils/getRatePercentageMessage', () => {
  describe.each([
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_MIND, ELEVEN_BUSD_PER_MIND),
      ['57.14% above market', PercentageDirection.ABOVE],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_MIND, FIVE_BUSD_PER_MIND),
      ['-28.57% below market', PercentageDirection.BELOW],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_MIND, SEVEN_HUNDRED_BUSD_PER_MIND),
      ['9,900% above market', PercentageDirection.ABOVE],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_MIND, ONE_BUSD_PER_MIND),
      ['-85.71% below market', PercentageDirection.BELOW],
    ],
    [
      getRatePercentageDifference(SEVEN_BUSD_PER_MIND, SEVEN_BUSD_PER_MIND),
      ['at market price', PercentageDirection.MARKET],
    ],
  ])('returns correct message and direction', (percent, expected) => {
    it(`for ${percent.toSignificant(6)} Percent`, () => {
      const [message, direction] = getRatePercentageMessage(percent, mockT)
      expect(message).toBe(expected[0])
      expect(direction).toBe(expected[1])
    })
  })
})
