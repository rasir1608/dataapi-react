import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './index.scss'
let cx = classNames.bind(styles)

class HeaderNav extends Component {
  render (createElement, context) {
    return (
      <div className={cx('header-nav')}>
        <div className={cx('header-left')}>
          <a href='#/home' className={cx('app-logo')}>
            <img src='static/image/logo.png'/>
            <span>
              API市场
            </span>
          </a>
          <div className={cx('nav-link')}>
            <NavLink to='/home' replace activeClassName='selected' activeStyle={{color: '#20a0ff'}}>个人主页</NavLink>
            <NavLink to='/counter' replace activeClassName='selected' activeStyle={{color: '#20a0ff'}}>APP市场</NavLink>
          </div>
        </div>
        <div className={cx('header-right')}>
          <img src='static/image/hello-kiity.jpg'/>
          <div>
            未登录
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderNav
