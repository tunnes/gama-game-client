import React from 'react'

export default () => (
  <div className='message__wrapper message--question'>
    <div className="question__header">
      <p className="question__title">
        What was the name of ESPN brodcast in whitch LeBron
        James annouced he would play for Miami?
      </p>

      <span className='question__category'>
        Basketball
      </span>
    </div>
    <div className='question__body'>
      <label className='question__body__item'>
        <input type="radio" name="gender" value="male" /> Male
      </label>
      <label className='question__body__item'>
        <input type="radio" name="gender" value="male" /> Male
      </label>
      <label className='question__body__item'>
        <input type="radio" name="gender" value="male" /> Male
      </label>
      <label className='question__body__item'>
        <input type="radio" name="gender" value="male" /> Male
      </label>
    </div>
    <button className='button__default'>
      Next
    </button>
  </div>
)