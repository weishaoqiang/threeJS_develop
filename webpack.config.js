const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRCPATH = path.resolve(__dirname, 'src')
const config = {
  mode: 'development',
  entry: [SRCPATH + '/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: SRCPATH + '/index.html',
    filename: 'index.html',
    inject: 'body'
  })]
}

module.exports = config