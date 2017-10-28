'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	layout: 'Layout',
	restapi: '/restapi',
	routes: 'routes',
	staticEntry: 'index.html',
	// codeSpliting: true,
	gulp: {
		publishCopy: ['!' + __dirname + '/should_ignore', '!' + __dirname + '/should_ignore/**/*'],
		publishBabel: ['!' + __dirname + '/should_ignore/**/*.js']
	}
};