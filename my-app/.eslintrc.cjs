module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'prettier'
  ],
  'rules': {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-console': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'require-jsdoc': 0,
    'prettier/prettier': 'error',
  },
  'settings': {
    'react': {
      'createClass': 'createReactClass',
      'pragma': 'React',
      'fragment': 'Fragment',
      'version': 'detect',
      'flowVersion': '0.53',
    },
    'propWrapperFunctions': [
      'forbidExtraProps',
      {'property': 'freeze', 'object': 'Object'},
      {'property': 'myFavoriteWrapper'},
    ],
    'linkComponents': [
      'Hyperlink',
      {'name': 'Link', 'linkAttribute': 'to'},
    ],
  },
};
