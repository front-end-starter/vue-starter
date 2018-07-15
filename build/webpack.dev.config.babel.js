import path from 'path';
import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.config.babel';
import LiveReloadPlugin from 'webpack-livereload-plugin';

export default function (env) { return Merge(CommonConfig, {
	output: {
		path: path.resolve(__dirname, '../public/assets-dev/scripts'),
		publicPath: '/assets-dev/scripts/',
		filename: '[name].js'
	},

	plugins: [
		new LiveReloadPlugin()
	],

	devtool: 'eval-source-map'
}); };
