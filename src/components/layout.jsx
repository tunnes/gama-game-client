import React, { Component } from 'react'
import NavigationBar from './navigation_bar'
import Footer from './footer'

export default props => (
  <div className="page__wrapper">
    <NavigationBar />
    {props.children}
    <Footer />
  </div>
)