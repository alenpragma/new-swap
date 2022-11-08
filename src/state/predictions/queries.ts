import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsMIND,
  betBaseFields as betBaseFieldsMIND,
  userBaseFields as userBaseFieldsMIND,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'MIND' ? roundBaseFieldsMIND : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) => (tokenSymbol === 'MIND' ? betBaseFieldsMIND : betBaseFieldsBNB)

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'MIND' ? userBaseFieldsMIND : userBaseFieldsBNB
