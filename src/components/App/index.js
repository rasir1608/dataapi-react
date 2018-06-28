import React, {Component} from 'react'
import classNames from 'classnames/bind'
import HeaderNav from '../Header-nav'
import styles from './index.scss'
let cx = classNames.bind(styles)

class App extends Component {
  render () {
    return (
      <div className={cx('app')}>
        <HeaderNav>
        </HeaderNav>
        <div className={cx('main-layout')}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
