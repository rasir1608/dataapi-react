import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Signup from '@/components//Login/signup'

class SignupView extends Component {
  render () {
    return (
      <Signup></Signup>
    )
  }
}

export default withRouter(connect()(SignupView))