const webpackMerge = require('webpack-merge')
const path = require('path')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common.conf.js')
const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')
const { setStyleRules } = require('./util.js')

const prodConfig = webpackMerge(commonConfig, {
	module: {
		rules: [setStyleRules({ sourceMap: true, extract: true })]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new cleanWebpackPlugin(['dist'], { root: path.resolve('.') }),
		new uglifyJsPlugin({
			sourceMap: true
		}),
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			inject: true
		}),
		new extractTextPlugin({
			filename: 'style/[name].[contenthash:8].css'
		})
	]
})

module.exports = prodConfig
