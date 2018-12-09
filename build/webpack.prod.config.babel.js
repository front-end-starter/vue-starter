import path from 'path';
import Webpack from 'webpack';
import WebpackMerge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import common_config from './webpack.common.config.babel';

const config = WebpackMerge(common_config, {
	mode: 'production',

	output: {
		path: path.resolve(__dirname, '../public/assets/scripts'),
		publicPath: '/assets/scripts/',
		filename: '[name].min.js',
		chunkFilename: '[name].[chunkhash].min.js'
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				sourceMap: false,
			}),

			new OptimizeCssAssetsPlugin({
				cssProcessorPluginOptions: {
					preset: [
						'default',
						{
							discardComments: {
								removeAll: true
							}
						}
					]
				}
			})
		]
	}
});

export default config;
