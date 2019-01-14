import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createGame } from '../store/actions'

import LandingPage from '../components/landing_page'

const mapDispatch = dispatch => (
  bindActionCreators({ createGame }, dispatch)
)

export default connect(null, mapDispatch)(LandingPage)