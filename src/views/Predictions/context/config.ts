import addresses from 'config/constants/contracts'

import { GRAPH_API_PREDICTION_MIND, GRAPH_API_PREDICTION_BNB } from 'config/constants/endpoints'
import { getAddress } from 'utils/addressHelpers'
import { bscTokens } from '@pancakeswap/tokens'
import { BigNumber } from '@ethersproject/bignumber'

const DEFAULT_MIN_PRICE_USD_DISPLAYED = BigNumber.from(10000)

export default {
  BNB: {
    address: getAddress(addresses.predictionsBNB),
    api: GRAPH_API_PREDICTION_BNB,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleBNB),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    displayedDecimals: 4,
    token: bscTokens.bnb,
  },
  MIND: {
    address: getAddress(addresses.predictionsMIND),
    api: GRAPH_API_PREDICTION_MIND,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleMIND),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    displayedDecimals: 4,
    token: bscTokens.cake,
  },
}
