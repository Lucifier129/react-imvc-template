import 'moment/locale/zh-cn'
import ReactDOM from 'react-dom'
import createApp from 'create-app/lib/client'
import routes from './routes'

__webpack_public_path__ = window.__PUBLIC_PATH__ + '/javascript/'
const __APP_SETTINGS__ = window.__APP_SETTINGS__ || {}

const webpackLoader = loadModule =>
  new Promise(loadModule).then(module => module.default || module)

const viewEngine = {
  render (component, container) {
    console.time('React#render')
    let result = ReactDOM.render(component, container)
    console.timeEnd('React#render')
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

function firstDifferenceIndex (string1, string2) {
  var minLen = Math.min(string1.length, string2.length)
  for (var i = 0; i < minLen; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      return i
    }
  }
  return string1.length === string2.length ? -1 : minLen
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
