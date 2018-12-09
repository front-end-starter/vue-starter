import path from 'path';
import WebpackMerge from 'webpack-merge';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import common_config from './webpack.common.config.babel';

const config = WebpackMerge(common_config, {
	mode: 'development',

	devtool: 'cheap-module-source-map',

	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},

	output: {
		path: path.resolve(__dirname, '../public/assets-dev/scripts'),
		publicPath: '/assets-dev/scripts/',
		filename: '[name].js',
		chunkFilename: '[name].js'
	},

	plugins: [
		new LiveReloadPlugin()
	]
});

export default config;
