/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const CracoWorkboxPlugin = require('craco-workbox');
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        util: require.resolve('util'),
        stream: require.resolve('stream-browserify'),
        zlib: require.resolve('browserify-zlib')
      };
      webpackConfig.plugins.push(
        new webpack.IgnorePlugin({
          checkResource(resource) {
            // Ignore source map warnings for all modules in node_modules
            if (resource.includes('node_modules') && resource.match(/\.ts$/)) {
              return true;
            }
            return false;
          }
        })
      );

      // Suppress source map warnings globally
      webpackConfig.ignoreWarnings = [
        {
          module: /node_modules/,
          message: /Failed to parse source map/
        }
      ];

      return webpackConfig;
    }
  },
  plugins: [
    {
      plugin: CracoWorkboxPlugin
    }
  ]
};
