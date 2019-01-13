import { takeLatest, all } from 'redux-saga/effects'

import * as type from '../../constants/action_types'

const sagas = function* sagas() {
  yield all([
    takeLatest(type.FOO, action => {
        // BAR
      }
    ),
  ])
}

export default sagas