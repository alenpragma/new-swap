import { Bet, BetPosition, Round, PredictionUser } from 'state/types'
import numberOrNull from 'utils/numberOrNull'

import { RoundResponseMIND } from './cakeQueries'

const getRoundPosition = (positionResponse: string) => {
  if (positionResponse === 'Bull') {
    return BetPosition.BULL
  }

  if (positionResponse === 'Bear') {
    return BetPosition.BEAR
  }

  if (positionResponse === 'House') {
    return BetPosition.HOUSE
  }

  return null
}

export const transformBetResponseMIND = (betResponse): Bet => {
  const bet = {
    id: betResponse.id,
    hash: betResponse.hash,
    block: numberOrNull(betResponse.block),
    amount: betResponse.amount ? parseFloat(betResponse.amount) : 0,
    position: betResponse.position === 'Bull' ? BetPosition.BULL : BetPosition.BEAR,
    claimed: betResponse.claimed,
    claimedAt: numberOrNull(betResponse.claimedAt),
    claimedBlock: numberOrNull(betResponse.claimedBlock),
    claimedHash: betResponse.claimedHash,
    claimedBNB: betResponse.claimedMIND ? parseFloat(betResponse.claimedMIND) : 0,
    claimedNetBNB: betResponse.claimedNetMIND ? parseFloat(betResponse.claimedNetMIND) : 0,
    createdAt: numberOrNull(betResponse.createdAt),
    updatedAt: numberOrNull(betResponse.updatedAt),
  } as Bet

  if (betResponse.user) {
    bet.user = transformUserResponseMIND(betResponse.user)
  }

  if (betResponse.round) {
    bet.round = transformRoundResponseMIND(betResponse.round)
  }

  return bet
}

export const transformUserResponseMIND = (userResponse): PredictionUser => {
  const {
    id,
    createdAt,
    updatedAt,
    block,
    totalBets,
    totalBetsBull,
    totalBetsBear,
    totalMIND,
    totalMINDBull,
    totalMINDBear,
    totalBetsClaimed,
    totalMINDClaimed,
    winRate,
    averageMIND,
    netMIND,
  } = userResponse || {}

  return {
    id,
    createdAt: numberOrNull(createdAt),
    updatedAt: numberOrNull(updatedAt),
    block: numberOrNull(block),
    totalBets: numberOrNull(totalBets),
    totalBetsBull: numberOrNull(totalBetsBull),
    totalBetsBear: numberOrNull(totalBetsBear),
    totalBNB: totalMIND ? parseFloat(totalMIND) : 0,
    totalBNBBull: totalMINDBull ? parseFloat(totalMINDBull) : 0,
    totalBNBBear: totalMINDBear ? parseFloat(totalMINDBear) : 0,
    totalBetsClaimed: numberOrNull(totalBetsClaimed),
    totalBNBClaimed: totalMINDClaimed ? parseFloat(totalMINDClaimed) : 0,
    winRate: winRate ? parseFloat(winRate) : 0,
    averageBNB: averageMIND ? parseFloat(averageMIND) : 0,
    netBNB: netMIND ? parseFloat(netMIND) : 0,
  }
}

export const transformRoundResponseMIND = (roundResponse: RoundResponseMIND): Round => {
  const {
    id,
    epoch,
    failed,
    position,
    startAt,
    startBlock,
    startHash,
    lockAt,
    lockBlock,
    lockHash,
    lockPrice,
    lockRoundId,
    closeAt,
    closeBlock,
    closeHash,
    closePrice,
    closeRoundId,
    totalBets,
    totalAmount,
    bullBets,
    bullAmount,
    bearBets,
    bearAmount,
    bets = [],
  } = roundResponse

  return {
    id,
    failed,
    startHash,
    lockHash,
    lockRoundId,
    closeRoundId,
    closeHash,
    position: getRoundPosition(position),
    epoch: numberOrNull(epoch),
    startAt: numberOrNull(startAt),
    startBlock: numberOrNull(startBlock),
    lockAt: numberOrNull(lockAt),
    lockBlock: numberOrNull(lockBlock),
    lockPrice: lockPrice ? parseFloat(lockPrice) : 0,
    closeAt: numberOrNull(closeAt),
    closeBlock: numberOrNull(closeBlock),
    closePrice: closePrice ? parseFloat(closePrice) : 0,
    totalBets: numberOrNull(totalBets),
    totalAmount: totalAmount ? parseFloat(totalAmount) : 0,
    bullBets: numberOrNull(bullBets),
    bullAmount: bullAmount ? parseFloat(bullAmount) : 0,
    bearBets: numberOrNull(bearBets),
    bearAmount: bearAmount ? parseFloat(bearAmount) : 0,
    bets: bets.map(transformBetResponseMIND),
  }
}
