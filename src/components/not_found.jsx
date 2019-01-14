import React from 'react'
import Layout from './layout'
import { Link } from 'react-router-dom'

export default (props) => (
  <Layout>
    <div className='message__wrapper message--informative'>
      <h1>You flew a little far in this research...</h1>
      <p>How about we forget this and start from scratch?</p>
      <Link to='/' className='button__default'>
        Back to home
      </Link>
    </div>
  </Layout>
)