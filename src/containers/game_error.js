import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createGame } from '../store/actions'

import GameErro from '../components/game_error'

const mapDispatch = dispatch => (
  bindActionCreators({ createGame }, dispatch)
)

export default connect(null, mapDispatch)(GameErro)