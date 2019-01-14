import { combineReducers } from "redux"

import game from './game'
import question from './question'
import gameQuestion from './game_question'
import score from './score'

export default combineReducers({
  gameQuestion,
  question,
  score,
  game
})