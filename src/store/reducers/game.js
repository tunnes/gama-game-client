import * as type from '../../constants/action_types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SET_GAME:
      return action.payload
    case type.GET_GAME_ERROR:
      return { error: action.payload }
    default:
      return state
  }
}