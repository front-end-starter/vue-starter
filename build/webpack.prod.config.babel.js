import Webpack from 'webpack';
import Merge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CommonConfig from './webpack.common.config.babel';

export default function (env) { return Merge(CommonConfig, {
	plugins: [
		new UglifyJsPlugin({
			parallel: true
		})
	]
}); };
