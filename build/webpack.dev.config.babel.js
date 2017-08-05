import path from 'path';
import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.config.babel';
import LiveReloadPlugin from 'webpack-livereload-plugin';

export default function (env) { return Merge(CommonConfig, {
	output: {
		path: path.resolve(__dirname, '../public/assets/scripts/dev'),
		publicPath: '/assets/scripts/dev/',
		filename: '[name].js'
	},

	devServer: {
		historyApiFallback: true,
		noInfo: true
	},

	plugins: [
		new LiveReloadPlugin()
	],

	devtool: 'eval-source-map'
}); };
