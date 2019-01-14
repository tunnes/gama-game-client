import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createGame } from '../store/actions'

import Score from '../components/score'

const mapState = state => ({
  score: state.score
})

const mapDispatch = dispatch => (
  bindActionCreators({ createGame }, dispatch)
)

export default connect(mapState, mapDispatch)(Score)