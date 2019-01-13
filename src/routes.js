import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Login from './components/login'
import Contact from './components/contact'
import About from './components/about'
import NotFound from './components/not_found'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)