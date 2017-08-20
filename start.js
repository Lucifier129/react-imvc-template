process.env.NODE_ENV = 'production'

var ReactIMVC = require('react-imvc')
var config = require('./imvc.config')

ReactIMVC.start({
	config: {
		...config,
		root: __dirname,
		logger: 'dev',
	}
})