const path = require('path');

module.exports = {
	entry: 'src/index.js',
	output: {
        libraryTarget: 'amd',
		publicPath: '/dist/',
		filename: 'cycle-child-example.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				use: {
					loader: 'babel-loader',
					options: {
					  	presets: ['es2015', 'stage-2'],
						plugins: [
							"syntax-jsx",
							["transform-react-jsx", {"pragma": "html"}]
						]
					},
				  }
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
	],
	devtool: 'source-map',
	externals: [
	],
};
