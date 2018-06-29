// import ReactDOM from 'react-dom';
import 'babel-polyfill';
// import viewportUnitsBuggyfill from 'viewport-units-buggyfill';
// import viewportUnitsBuggyfillHacks from
// 'viewport-units-buggyfill/viewport-units-buggyfill.hacks';
import dva from 'dva';
// import createLoading from 'dva-loading';
// import FastClick from './assets/fastclick';

import './index.css';
import './assets/sf_font';

/* eslint-disable */
/* 微服务测试用 */
// viewportUnitsBuggyfill.init({ hacks: viewportUnitsBuggyfillHacks });
// const { VConsole } = require('./assets/vconsole.min.js');
// new VConsole();

// 1. Initialize
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}
const app = dva();

// 2. Plugins
// app.use(createLoading());

// 3. Model
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#app');

/* 微服务用 */
// if (process.env.NODE_ENV === 'development') {
//   app.start('#app');
// } else {
//   // 生产环境需要确保cordova加载完成
//   document.addEventListener('deviceready', () => {
//     app.start('#app');
//   }, false);
// }
