import React from 'react'
import LandingPage from '../containers/landing_page';
import Game from '../containers/game';

export default (props) => (
  <div>
    { props.game ? <Game /> : <LandingPage/>}
  </div>
)