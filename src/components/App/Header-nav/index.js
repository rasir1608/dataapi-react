import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './index.css'
let cx = classNames.bind(styles)

class HeaderNav extends Component {
  render (createElement, context) {
    return (
      <div className={cx('header-nav')}>
        <div>
          <NavLink to='/home' replace activeClassName='selected' activeStyle={{color: '#20a0ff'}}>个人主页</NavLink>
          <NavLink to='/counter' replace activeClassName='selected' activeStyle={{color: '#20a0ff'}}>APP市场</NavLink>
        </div>
      </div>
    )
  }
}

export default HeaderNav
