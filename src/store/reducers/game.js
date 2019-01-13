import * as type from '../../constants/action_types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.FOO:
      return action.payload
    default:
      return state
  }
}