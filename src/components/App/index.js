import React, {Component} from 'react'
// import classNames from 'classnames/bind'
import HeaderNav from './Header-nav'
import './index.css'
// let cx = classNames.bind(styles)

class App extends Component {
  render () {
    return (
      <HeaderNav>
        {this.props.children}
      </HeaderNav>
    )
  }
}

export default App
