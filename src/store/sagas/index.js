import { takeLatest, all } from 'redux-saga/effects'

import * as type from '../../constants/action_types'
import * as sagaService from '../../services/saga_service'

const sagas = function* sagas() {
  yield all([
    takeLatest(type.GET_GAME,
      action => sagaService.getGame(action)
    ),

    takeLatest(type.GET_QUESTION,
      action => sagaService.getQuestion(action)
    ),

    takeLatest(type.SUBMIT_ANSWER,
      action => sagaService.submitAnswer(action)
    ),

    takeLatest(type.CREATE_GAME,
      () => sagaService.createGame()
    ),
  ])
}

export default sagas