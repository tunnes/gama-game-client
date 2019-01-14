import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitAnswer } from '../store/actions'

import Question from '../components/question'

const mapState = state => ({
  gameQuestion: state.gameQuestion,
  question: state.question
})

const mapDispatch = dispatch => (
  bindActionCreators({ submitAnswer }, dispatch)
)

export default connect(mapState, mapDispatch)(Question)