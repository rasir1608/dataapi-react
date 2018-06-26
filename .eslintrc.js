// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true,
    "es6": true
  },
  globals:{
    "__ENV__": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: ["react"],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "indent": ["off", 4],
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'func-names':'off',
    'no-extend-native':'off',
    'no-plusplus':'off',
    'no-prototype-builtins':'off',
    'radix':'off',
    'max-len':'off',
    'eqeqeq':'off',
    'no-console':'off',
    'no-lonely-if':'off',
    'no-underscore-dangle': 'off',
    "invalid-first-character-of-tag-name":'off',
    "vue/no-side-effects-in-computed-properties":"off",
    "no-trailing-spaces":"off",
    "Newline required at end of file but not found":"off",
    "eol-last":"off",
    "spaced-comment":"off",
    "no-multiple-empty-lines":"off",
    "no-multi-spaces  ":"off",
    "no-irregular-whitespace ":"off",
    "no-fallthrough":"off",
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
