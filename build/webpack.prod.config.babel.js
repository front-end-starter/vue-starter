import Webpack from 'webpack';
import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.config.babel';

export default function (env) { return Merge(CommonConfig, {
	plugins: [
		// this allows uglify to strip all warnings
		// from Vue.js source code.
		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),

		// This minifies not only JavaScript, but also
		// the templates (with html-minifier) and CSS (with cssnano)!
		new Webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),

		new Webpack.optimize.ModuleConcatenationPlugin(),

		new Webpack.LoaderOptionsPlugin({
			minimize: true
		})
	],

	devtool: 'source-map'
}); };
