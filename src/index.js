import ReactDOM from 'react-dom'
import createApp from 'create-app/lib/client'
import routes from './routes'

__webpack_public_path__ = window.__PUBLIC_PATH__ + '/'
const __APP_SETTINGS__ = window.__APP_SETTINGS__ || {}

const webpackLoader = loadModule =>
  new Promise(loadModule).then(module => module.default || module)

const viewEngine = {
  render (component, container) {
    console && console.time && console.time('React#render')
    let result = ReactDOM.render(component, container)
    console && console.timeEnd && console.timeEnd('React#render')
    return result
  }
}

const appSettings = {
  ...__APP_SETTINGS__,
  hashType: 'hashbang',
  container: '#root',
  context: {
    preload: {},
    ...__APP_SETTINGS__.context,
    isClient: true,
    isServer: false
  },
  loader: webpackLoader,
  routes,
  viewEngine
}

/**
 * 动态收集服务端预加载的内容
 */
const preload = {}
Array.from(document.querySelectorAll('[data-preload]')).forEach(elem => {
  let name = elem.getAttribute('data-preload')
  let content = elem.textContent
  preload[name] = content
})
appSettings.context.preload = preload

const app = createApp(appSettings)

app.start()
