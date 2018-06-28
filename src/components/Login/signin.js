import React,{ Component } from 'react'
import { Button,Input } from 'antd'
import { Link } from 'react-router-dom'
import pureRender from 'pure-render-decorator'
import classNames from "classnames/bind"
import styles from './index.scss'

const cx = classNames.bind(styles)

@pureRender
export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      submitLoading:false,
    }
    this.submit = this.submit.bind(this)
  }
  submit(){
    this.setState({
      submitLoading: true
    });
  }
  render(){
    return (
      <div className={cx('login')}>
        <div className={cx('login-title')}>
          API市场
        </div>
        <div className={cx('login-main')}>
          <div className={cx('login-actions')}>
            <Link to='/signin' className={cx('action-active')}>登录</Link>
            <Link to='/signup'>注册</Link>
          </div>
          <div className={cx('login-inputs')}>
            <div>
              <label>帐号：</label>
              <Input placeholder='请填入帐号'/>
            </div>
            <div>
              <label>密码：</label>
              <Input placeholder='请填入帐号'/>
            </div>
          </div>
          <div className={cx('login-submits')}>
            <Button type='primary' size='large' loading={this.state.submitLoading} onClick={this.submit}>确认登录</Button>
          </div>
        </div>
      </div>
    )
  }
}