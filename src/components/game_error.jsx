import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div className='message__wrapper message--informative'>
    <h1>It seems that something went wrong!?</h1>
    <p>Are you sure this game exists? If not you can start a new one.</p>
    <button className='button__default' onClick={ event => props.createGame() }>
      Start a new game
    </button>
  </div>
)