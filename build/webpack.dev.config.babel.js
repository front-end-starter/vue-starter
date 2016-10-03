import path from 'path';
import config from './webpack.base.config.babel';
import LiveReloadPlugin from 'webpack-livereload-plugin';

config.devtool = '#eval-source-map';

config.output = {
	path: path.resolve(__dirname, '../public/assets/scripts/dev'),
	publicPath: '/assets/scripts/dev/',
	filename: '[name].js'
};

config.devServer = {
	historyApiFallback: true,
	noInfo: true
};

config.plugins = (config.plugins || []).concat([
	new LiveReloadPlugin()
]);

export default config;
