import React from 'react'

export default () => (
  <div className='message__wrapper message--score'>
    <h1>Congradulations! You completed the game!</h1>
    <div className='score__wrapper'>
      Your score was <span className='score__highlight'>08/10</span>
    </div>

    <button className='button__default'>
      Start a new game
    </button>
  </div>
)