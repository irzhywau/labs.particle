/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const presetReactApp = require('babel-preset-react-app');

module.exports = function (api, opts) {
  const customPlugins = [
    ['@babel/plugin-transform-parameters', { loose: true }],
    ['@babel/plugin-transform-classes', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]
  ];

  return {
    ...presetReactApp(api, opts),
    plugins: [...presetReactApp(api, opts).plugins, ...customPlugins]
  };
};
