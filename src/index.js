// routes

export default [
  {
    path: '/',
    controller: require('./home/controller')
  },
  {
  	path: '/deep',
  	controller: require('./deep/a/b/Controller')
  },
  {
    path: ['/list', '/detail'],
    controller: require('./notfound/controller')
  }
]
