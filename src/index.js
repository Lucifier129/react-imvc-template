// routes
import base from './base'

export default [
  {
    path: ['/', '/index', '/list'],
    controller: require('./home/Controller')
  },
  base,
]
