import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getGame } from '../store/actions'

import Game from '../components/game'

const mapState = state => ({
  game: state.game,
  score: state.score,
  question: state.question
})

const mapDispatch = dispatch => (
  bindActionCreators({ getGame }, dispatch)
)

export default connect(mapState, mapDispatch)(Game)