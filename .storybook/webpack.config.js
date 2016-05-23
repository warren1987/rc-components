const path = require('path');

module.exports = {
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../'),
			}, {
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				include: path.resolve(__dirname, '../'),
				query: {
					presets: ['es2015'],
					plugins: ["transform-object-rest-spread"]
				}
			}, {
				test: /\.css?$/,
				loaders: ['style', 'raw'],
				include: path.resolve(__dirname, '../')
			}, {
				test: /\.less?$/,
				loader: "style!css!less",
				include: path.resolve(__dirname, '../')
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
