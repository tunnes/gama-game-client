import React from 'react'
import NavigationBar from './navigation_bar'
import Footer from './footer'

export default () => (
  <div className="page__wrapper">
    <NavigationBar />
    <div className='message__wrapper message--informative'>
      <h1>Come play with us!</h1>
      <p>
        Have you even played Gama Game? It's a game of general knowledge questions and
        answers. It used to be played at #gamagame, an IRC(Internet Relay Chat) channel in the
        Brasnet network, whitch no longer exists.
      </p>

      <button className='button__default'>
        Start
      </button>
    </div>

    <Footer />
  </div>
)