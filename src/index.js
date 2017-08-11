// routes

export default [
  {
    path: '/',
    controller: require('./home/controller')
  },
  {
    path: '/*',
    controller: require('./notfound/controller')
  }
]
