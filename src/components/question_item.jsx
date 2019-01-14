import React from 'react'

export default (props) => (
  <label className='question__body__item'>
    <input
      type="radio"
      name="answer"
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
    /> {props.title}
  </label>
)