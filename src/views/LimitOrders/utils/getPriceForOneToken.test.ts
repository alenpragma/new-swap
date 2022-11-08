import { JSBI, Token, CurrencyAmount } from '@pancakeswap/sdk'
import getPriceForOneToken from './getPriceForOneToken'

const MIND = new Token(56, '0x258Ea33a949D8562A2683e1C54D4bAeAd2949F9E', 18, 'MIND', 'PancakeSwap Token')
const BUSD = new Token(56, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD')
const DOGE = new Token(56, '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', 8, 'DOGE', 'Binance-Peg Dogecoin')

const EIGHT_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(8))
const EIGHTEEN_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
const ZERO = JSBI.multiply(JSBI.BigInt(0), EIGHTEEN_DECIMALS)
const ONE = JSBI.multiply(JSBI.BigInt(1), EIGHTEEN_DECIMALS)
const ONE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(1), EIGHT_DECIMALS)
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const FIVE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(5), EIGHT_DECIMALS)

describe('limitOrders/utils/getPriceForOneToken', () => {
  describe.each([
    [CurrencyAmount.fromRawAmount(MIND, ONE), CurrencyAmount.fromRawAmount(BUSD, ONE), '1'],
    [CurrencyAmount.fromRawAmount(MIND, FIVE), CurrencyAmount.fromRawAmount(BUSD, FIVE), '1'],
    [CurrencyAmount.fromRawAmount(MIND, ONE), CurrencyAmount.fromRawAmount(BUSD, FIVE), '5'],
    [CurrencyAmount.fromRawAmount(MIND, FIVE), CurrencyAmount.fromRawAmount(BUSD, ONE), '0.2'],
    [CurrencyAmount.fromRawAmount(DOGE, ONE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, ONE), '1'],
    [CurrencyAmount.fromRawAmount(DOGE, FIVE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, FIVE), '1'],
    [CurrencyAmount.fromRawAmount(DOGE, ONE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, FIVE), '5'],
    [CurrencyAmount.fromRawAmount(DOGE, FIVE_EIGHT_DEC), CurrencyAmount.fromRawAmount(BUSD, ONE), '0.2'],
    [CurrencyAmount.fromRawAmount(MIND, ZERO), CurrencyAmount.fromRawAmount(BUSD, ONE), undefined],
    [CurrencyAmount.fromRawAmount(MIND, ONE), CurrencyAmount.fromRawAmount(BUSD, ZERO), undefined],
  ])(`returns correct price`, (input, output, expected) => {
    it(`for ${input.toSignificant(6)} ${input.currency.symbol} -> ${output.toSignificant(6)} ${
      output.currency.symbol
    }`, () => {
      const price = getPriceForOneToken(input, output)
      expect(price?.toSignificant(6)).toBe(expected)
    })
  })
})
