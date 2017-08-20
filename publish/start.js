'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

process.env.NODE_ENV = 'production';

var ReactIMVC = require('react-imvc');
var config = require('./imvc.config');

ReactIMVC.start({
	config: _extends({}, config, {
		root: __dirname,
		logger: 'dev'
	})
});