import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';

const config = {
	entry: './src/main.js',

	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
			'node_modules'
		],

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
					optimizeSSR: false,
					hotReload: false,
					shadowMode: true
				}
			},

			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},

			{
				test: /\.css$/,
				use: [
					{
						loader: 'vue-style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					}
				]
			},

			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			}
		]
	},

	plugins: [
		new VueLoaderPlugin()
	]
};

export default config;
