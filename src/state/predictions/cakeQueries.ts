import { UserResponse, BetResponse, HistoricalBetResponse, RoundResponse } from './responseType'

export interface UserResponseMIND extends UserResponse<BetResponseMIND> {
  totalMIND: string
  totalMINDBull: string
  totalMINDBear: string
  averageMIND: string
  totalMINDClaimed: string
  netMIND: string
}

export interface BetResponseMIND extends BetResponse {
  claimedMIND: string
  claimedNetMIND: string
  user?: UserResponseMIND
  round?: RoundResponseMIND
}

export type HistoricalBetResponseMIND = HistoricalBetResponse<UserResponseMIND>

export type RoundResponseMIND = RoundResponse<BetResponseMIND>

export interface TotalWonMarketResponseMIND {
  totalMIND: string
  totalMINDTreasury: string
}

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */
export const roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`

export const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedMIND
 claimedNetMIND
 createdAt
 updatedAt
`

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalMIND
  totalMINDBull
  totalMINDBear
  totalBetsClaimed
  totalMINDClaimed
  winRate
  averageMIND
  netMIND
`
