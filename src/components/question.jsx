import React, { Component } from 'react'
import QuestionItem from './question_item'

const INITIAL_STATE = {
  answer: null
}
export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectOption = this.handleSelectOption.bind(this)
  }

  handleSelectOption (event) {
    this.setState({ answer: event.target.value })
  }

  handleSubmit (event) {
    this.props.submitAnswer({
      answer: this.state.answer,
      id: this.props.gameQuestion.id
    })

    this.setState(INITIAL_STATE)
  }

  render () {
    return (
      <div className='message__wrapper message--question'>
        <div className="question__header">
          <p className="question__title">
            {this.props.question.title}
          </p>
          <span className='question__category'>
            {this.props.question.category}
          </span>
        </div>
        <div className='question__body'>
          {
            [1, 2, 3, 4].map(item =>
              <QuestionItem
                key={item}
                value={item}
                onChange={this.handleSelectOption}
                checked={this.state.answer == item}
                title={this.props.question[`option${item}`]}
              />
            )
          }
        </div>
        <button className='button__default' onClick={this.handleSubmit} disabled={!this.state.answer}>
          Next
        </button>
      </div>
    )
  }
}