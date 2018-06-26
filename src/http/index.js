import axios from 'axios'

axios.defaults.timeout = 60000
// http request 拦截器
axios.baseUrl = {}
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config) => {
    return config
  },
  err => Promise.reject(err))

// 401 302 code!=0 拦截处理;
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error.toString())
  })
export default axios
