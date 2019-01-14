import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className='navigaton_bar'>
    <nav className='navigaton_bar__wrapper'>
      <a href='/' className='navigaton_bar__brand'>
        Gama Game
      </a>
      <Link to="/about" className='navigaton_bar__item'>
        About
      </Link>
      <Link to="/contact" className='navigaton_bar__item'>
        Contact
      </Link>
      <Link to="/login" className='navigaton_bar__item'>
        Login
      </Link>
    </nav>
  </div>
)