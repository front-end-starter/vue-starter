import path from 'path';
import webpack from 'webpack';

export default {
	entry: './src/main.js',

	output: {
		path: path.resolve(__dirname, '../public/assets/scripts'),
		publicPath: '/assets/scripts/',
		filename: '[name].min.js'
	},

	resolve: {
		modules: ['node_modules'],

		extensions: ['.js', '.vue'],

		alias: {
			'Components': path.resolve(__dirname, '../src/components'),
			'Directives': path.resolve(__dirname, '../src/directives'),
			'Pages': path.resolve(__dirname, '../src/pages'),
			'Store': path.resolve(__dirname, '../src/store')
		}
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: 'style-loader!css-loader?-autoprefixer!postcss-loader'
					},
					postcss: [require('postcss-cssnext')]
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};
