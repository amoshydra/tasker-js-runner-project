const path = require('path');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: false,
  devServer: {
    injectClient: false,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules/tasker-js-runner'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'last 3 ChromeAndroid versions',
                    ],
                  },
                  corejs: 3,
                  modules: false,
                  useBuiltIns: 'usage',
                  debug: true,
                }
              ],
            ],
          },
        },
      },
    ],
  },
};