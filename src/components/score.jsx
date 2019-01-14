import React from 'react'

export default (props) => (
  <div className='message__wrapper message--score'>
    <h1>Congradulations! You completed the game!</h1>
    <div className='score__wrapper'>
      Your score was
      <span className='score__highlight'>
        {String(props.score).padStart(2, '0')}/10
      </span>
    </div>

    <button className='button__default' onClick={ event => props.createGame() }>
      Start a new game
    </button>
  </div>
)