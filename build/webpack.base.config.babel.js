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
		extensions: ['', '.js', '.vue'],
		alias: {
			'Components': path.resolve(__dirname, '../src/Components'),
			'Directives': path.resolve(__dirname, '../src/Directives'),
			'Pages': path.resolve(__dirname, '../src/Pages'),
			'Store': path.resolve(__dirname, '../src/Stores')
		}
	},

	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},

	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},

	vue: {
		loaders: {
			css: 'style!css?-autoprefixer!postcss'
		},

		postcss: [
			require('postcss-cssnext')({
				browsers: ['last 2 versions']
			})
		]
	}
};
