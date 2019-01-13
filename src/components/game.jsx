import React from 'react'
import NavigationBar from './navigation_bar'
import Footer from './footer'
import Question from './question'
import Score from './score'

export default () => (
  <div className="page__wrapper">
    <NavigationBar />
    <Score />
    <Footer />
  </div>
)