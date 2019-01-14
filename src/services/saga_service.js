import { put, call, all } from 'redux-saga/effects'

import * as apiService from './api_service'
import * as type from '../constants/action_types'

export const getGame = function* (action) {
  try {
    const game = yield call(apiService.getGame, action.payload)

    yield all([
      put({type: type.SET_GAME, payload: game.data }),
      put({type: type.GET_QUESTION, payload: game.data })
    ])
  } catch (error) {
    yield put({type: type.GET_GAME_ERROR, payload: error.response })
  }
}

export const getQuestion = function* (action) {

    const currentGameQuest = action.payload.game_questions.find(
      game_question => game_question.answer == null
    )

    try {
      if (currentGameQuest) {

        const question = yield call(apiService.getQuestion, currentGameQuest.question_id)

        yield all([
          put({type: type.SET_GAME_QUESTION, payload: currentGameQuest }),
          put({type: type.SET_QUESTION, payload: question.data })
        ])

      } else {
        const score = yield call(apiService.getScore, action.payload.id)
        yield put({type: type.SET_SCORE, payload: score.data.score })
      }

    } catch (error) {
      yield put({type: type.GET_QUESTION_ERROR, payload: error.response })
    }
}

export const submitAnswer = function* (action) {
  try {
    const gameQuestion = yield call(apiService.submitAnswer, action.payload)
    yield put({type: type.GET_GAME, payload: gameQuestion.data.game_id })

  } catch (error) {
    yield put({type: type.SUBMIT_ANSWER_ERROR, payload: error.response })
  }
}

export const createGame = function* () {
  try {
    const game = yield call(apiService.createGame)
    history.pushState({}, null, `/game/${game.data.id}`)
    yield all([
      put({ type: type.RESET_SCORE }),
      put({ type: type.SET_GAME, payload: game.data }),
      put({ type: type.GET_QUESTION, payload: game.data })
    ])
  } catch (error) {
    yield put({type: type.CREATE_GAME_ERROR, payload: error.response })
  }
}