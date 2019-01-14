import { connect } from 'react-redux'

import Home from '../components/home'

const mapState = state => ({
  game: state.game
})

export default connect(mapState, null)(Home)