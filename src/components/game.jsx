import React, { Component } from 'react'
import Question from '../containers/question'
import Score from '../containers/score'
import Layout from './layout'
import GameError from '../containers/game_error'

export default class Game extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    this.props.id && this.props.getGame(this.props.id)
  }

  gameBody () {
    if (this.props.question && !this.props.score) {
      return <Question />
    } else if (this.props.score) {
      return <Score />
    } else if (this.props.game && this.props.game.error) {
      return <GameError />
    }
  }

  render () {
    return (
      <Layout>
        { this.gameBody() }
      </Layout>
    )
  }
}