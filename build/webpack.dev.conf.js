const webpackMerge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common.conf.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')
const { setStyleRules } = require('./util.js')

const devConfig = webpackMerge(commonConfig, {
	module: {
		rules: [setStyleRules({ sourceMap: false, extract: false })]
	},
	devtool: '#cheap-module-eval-source-map',
	devServer: {
		contentBase: false,
		quiet: true,
		inline: true,
		port: 8080,
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			inject: true
		}),
		// new extractTextPlugin({
		// 	filename: 'styles/[name].[contenthash:8].css'
		// })
	]
})

module.exports = devConfig
