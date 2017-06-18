'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// routes

exports.default = [{
  path: '/template',
  controller: require('./home/controller')
}, {
  path: '/template/*',
  controller: require('./notfound/controller')
}];