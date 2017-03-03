import demo from './app-demo'
import im from './app-im'
export default [demo, im].reduce(
  (routes, item) => item ? routes.concat(item) : routes,
  []
)
