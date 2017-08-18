process.env.NODE_ENV = 'production'

var IMVC = require('react-imvc')
var config = require('./imvc.config')

IMVC.start({
	config: {
		...config,
		root: __dirname,
		logger: 'dev',
	}
})