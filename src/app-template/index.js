// routes

export default [
  {
    path: '/template',
    controller: require('./home/controller')
  },
  {
    path: '/template/*',
    controller: require('./notfound/controller')
  }
]
