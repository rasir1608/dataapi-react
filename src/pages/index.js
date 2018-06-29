import React from 'react';
import { connect } from 'dva';
// import { createHashHistory } from 'history';
/* 添加水印用 */
// import { paintFixedWaterMark } from '../utils/utils';

// const router = createHashHistory();

// @connect(({ user }) => ({
//   user,
// }))
class Index extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/findById',
      payload: {
        id: 1,
      },
    });
  }
  render() {
    const { user } = this.props;
    const { obj } = user;
    return <div>{JSON.stringify(obj)}</div>;
  }
}

export default connect(({ user }) => ({
  user,
}))(Index);
