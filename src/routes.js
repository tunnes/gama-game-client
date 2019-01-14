import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/home'
import Login from './components/login'
import Contact from './components/contact'
import Game from './containers/game'
import About from './components/about'
import NotFound from './components/not_found'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/game/:id" render={({match}) => (<Game id={match.params.id} />)} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)