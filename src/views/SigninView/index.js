import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Signin from '@/components/Login/signin'

class SigninView extends Component {
  render () {
    return (
      <Signin></Signin>
    )
  }
}

export default withRouter(connect()(SigninView))