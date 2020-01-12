module.exports = {
	entry: 	"./src/app.js",
	output: {
		path: 		__dirname+"/public/scripts",
		filename: 	"bundle.js"
	} ,
	module: {
		rules: [
			{
				use: {
					loader: "babel-loader",
					options: {
						presets: ['react','env']
					}
				},
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: [{
		                loader: "style-loader" // creates style nodes from JS strings
		            }, {
		                loader: "css-loader" // translates CSS into CommonJS
		            }, {
		                loader: "sass-loader" // compiles Sass to CSS
	            }],
				test: /\.s?css$/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: __dirname+"/public",
		historyApiFallback: true,
	}
}