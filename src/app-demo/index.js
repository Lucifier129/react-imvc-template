// routes

export default [
  {
    path: '/demo',
    controller: require('./home/controller')
  },
  {
    path: '/demo/list',
    controller: require('./list/controller')
  },
  {
    path: '/demo/detail',
    controller: require('./detail/controller')
  },
  {
    path: '/demo/test',
    controller: require('./test/controller')
  }
]
