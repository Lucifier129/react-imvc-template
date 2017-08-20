'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (app, server) {
	app.use('/restapi', router);
	server.on('error', function (error) {
		console.log('error', error);
	});
};

var _express = require('express');

var router = (0, _express.Router)();

router.get('/admin', function (req, res) {
	res.json({
		name: 'Jade Gu'
	});
});