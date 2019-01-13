import React from 'react'

export default () => (
  <div className='navigaton_bar'>
    <nav className='navigaton_bar__wrapper'>
      <a href="/" className='navigaton_bar__brand'>
        Gama Game
      </a>
      <a href="/about" className='navigaton_bar__item'>About</a>
      <a href="/contact" className='navigaton_bar__item'>Contact</a>
      <a href="/login" className='navigaton_bar__item'>Login</a>
    </nav>
  </div>
)