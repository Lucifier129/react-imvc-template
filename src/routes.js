import template from './app-template'
import demo from './app-demo'

/**
 * 项目路由表
 * 往数组里添加项目即可
 */
const routes = [template, demo]

export default routes.reduce(
  (routes, item) => item ? routes.concat(item) : routes,
  []
)
