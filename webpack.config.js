const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				include: __dirname,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css?$/,
				loaders: ['style', 'raw'],
				include: __dirname
			},
			{
				test: /\.less$/,
				loader: "style!css!less"
			}
		]
	}
};
