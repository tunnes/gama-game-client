import * as type from '../../constants/action_types'

export const getGame = (gameID) => ({
  type: type.GET_GAME,
  payload: gameID
})

export const submitAnswer = (payload) => ({
  type: type.SUBMIT_ANSWER,
  payload: payload
})

export const createGame = () => ({
  type: type.CREATE_GAME
})