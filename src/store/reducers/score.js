import * as type from '../../constants/action_types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SET_SCORE:
      return action.payload
    case type.RESET_SCORE:
      return INITIAL_STATE
    default:
      return state
  }
}