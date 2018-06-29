const path = require('path');
import pxtoviewport from "postcss-px-to-viewport";
import cssimport from "postcss-import";
import cssurl from "postcss-url";
import cssaspectratiomini from "postcss-aspect-ratio-mini";
import csswritesvg from "postcss-write-svg";
import csscssnext from "postcss-cssnext";
import cssviewportunits from "postcss-viewport-units";
import cssnano from "cssnano";
// import pxtorem from "postcss-pxtorem";

export default {
  entry: 'src/index.js',
  outputPath: "./www",
  extraBabelPlugins: [
    'transform-decorators-legacy',
    ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/')
  },
  ignoreMomentLocale: true,
  // theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  extraPostCSSPlugins: [
    // pxtorem({
    //   rootValue: 37.5,
    //   unitPrecision: 5,
    //   // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
    //   selectorBlackList: [],
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 0
    // }),
    pxtoviewport({
      viewportWidth: 375,
      // (Number) The width of the viewport.
      viewportHeight: 667,
      // (Number) The height of the viewport.
      unitPrecision: 3,
      // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw',
      // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'],
      // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1,
      // (Number) Set the minimum pixel value to replace.
      mediaQuery: false
    }),
    cssimport({}),
    cssurl({}),
    cssaspectratiomini({}),
    csswritesvg({
      utf8: false
    }),
    csscssnext({
      warnForDuplicates: false,
    }),
    // cssviewportunits({}),
    cssnano({
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }),
  ],
  disableDynamicImport: true,
  // publicPath: './',
  hash: true,
  // "proxy": {
  //   "/api": {
  //     "target": "http://vue.sf-express.com:8080/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api": "" }
  //   }
  // }
};
