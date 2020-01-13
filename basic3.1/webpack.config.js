var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: {
		entry: "./src/App.js"
	},
	output: {
        path:__dirname+ '/build/',
        filename: "bundle.js",
        publicPath: '/'
	},
    devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loaders',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
};

