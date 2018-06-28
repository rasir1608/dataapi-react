import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


const onChange = (date, dateString) => {
  console.log(date, dateString);
}

class MineHome extends Component {
  render () {
    return (
      <div>
        个人主页
      </div>
    )
  }
}

export default withRouter(connect()(MineHome))
