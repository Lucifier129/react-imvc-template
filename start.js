process.env.NODE_ENV = 'production'

var config = require('./imvc.config')

require('react-imvc')({
	config: {
		...config,
		root: __dirname,
		logger: 'dev',
	}
})