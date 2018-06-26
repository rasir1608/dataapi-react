import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './index.styl'
let cx = classNames.bind(styles)

class App extends Component {
  render () {
    return (
      <div className={cx('app-p-box')}>
        <h1>React Router SAa1g1a :)</h1>
        <div>
          <Link to='/home' replace>首页1</Link>
          {' '}
          <NavLink to='/counter' replace activeClassName='selected' activeStyle={{color: 'red'}}>计数页面</NavLink>
          {' '}
          <Link to='/form' replace>表单提交2</Link>
          {' '}
          <Link to='/other' replace>Not Found</Link>
        </div>
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default App
