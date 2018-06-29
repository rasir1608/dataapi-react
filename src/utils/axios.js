import axios from 'axios';
// import { Toast } from 'antd-mobile';

axios.defaults.timeout = 60000;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/* 区分生产测试 */
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api';
} else {
  // axios.defaults.baseURL = 'http://sfim-common.sit.sf-express.com/sfimecsauth/xxx/';
  axios.defaults.baseURL = 'http://sfim-mcommon.sf-express.com/sfimecsauth/xxx/';
}


axios.interceptors.request.use(
  (config) => {
    // Toast.loading('加载中');
    return config;
  },
  err => Promise.reject(err),
);
axios.interceptors.response.use(
  (res) => {
    // 取消lid对应的loading
    // cas 跳转登录
    // if (res.data.status === 'jump') {
    //   // util.deleCookies();
    //   window.location.href = res.data.result.redirect;
    // }
    // // 全局统一出错处理
    if (res.data.status !== 'ok') {
      if (res.data.message) {
        // Message.error(res.data.message);
        return res;
      }
    }
    if (res.data) {
      return res.data;
    }
    return res;
  },
  (error) => {
    // Vue.$Progress.fail();
    return Promise.reject(error.response);
  },
);
export default axios;
