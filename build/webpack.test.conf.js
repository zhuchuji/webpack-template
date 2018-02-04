const webpackCommonConfig = require('./webpack.common.conf.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const { setStyleRules } = require('./util.js')

const webpackTestConfig = merge(webpackCommonConfig, {
  module: {
    rules: [setStyleRules({ sourceMap: false, extract: false })]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"testing"'
    })
  ]
})

delete webpackTestConfig.entry

module.exports = webpackTestConfig
