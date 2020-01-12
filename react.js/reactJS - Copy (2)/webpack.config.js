var webpack = require("webpack");
var path = require("path");

var DIR = path.resolve(__dirname, "dist");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: DIR + "/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: "./dist",
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(nodu_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["latest", "react", "stage-0"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
	}
}