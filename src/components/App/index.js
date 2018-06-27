import React, {Component} from 'react'
// import classNames from 'classnames/bind'
import HeaderNav from './Header-nav'
import './index.css'
// let cx = classNames.bind(styles)

class App extends Component {
  render () {
    return (
      <div>
        <HeaderNav>
        </HeaderNav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
