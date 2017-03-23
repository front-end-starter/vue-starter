module.exports = (ctx) => ({
	plugins: {
		'postcss-cssnext': {
			browsers: ['last 2 versions'],

			features: {
				customProperties: {
					variables: {}
				},

				rem: {
					rootValue: '100px'
				}
			}
		}
	}
});