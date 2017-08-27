// routes
import basic_usage from './basic_usage'
import advanced_usage from './advanced_usage'

export default [
  {
    path: ['/', '/index', '/list'],
    controller: require('./home/Controller')
  },
  basic_usage,
  advanced_usage
]
