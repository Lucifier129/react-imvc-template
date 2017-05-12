import fs from 'fs'
import express from 'express'
import compression from 'compression'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
import helmet from 'helmet'
import ReactViews from 'express-react-views'
import shareRoot from '../middleware/shareRoot'
import wrapRender from '../middleware/wrapRender'
import pkg from '../../package'
import config from '../../server.config'
import page from '../page'
import routes from '../../routes'

const app = express()

export default app

app.use(shareRoot(config.basename))
app.use(helmet(config.helmet))
app.use(compression())
// app.use(favicon(path.join(__dirname, '../static/favicon.ico')))

app.engine(
  'js',
  ReactViews.createEngine({
    beautify: process.env.NODE_ENV === 'development',
    transformViews: false
  })
)

// view engine setup
app.set('views', path.join(__dirname, '../../routes'))
app.set('view engine', 'js')

app.use(
  wrapRender({
    defaults: config
  })
)

app.use(logger('dev'))
app.use(bodyParser.json({
  limit: '10MB'
}))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cookieParser())

app.get('/slbhealthcheck.html', (req, res) => {
  res.send('slbhealthcheck ok')
})

// shareRoot 中间件把 config.basename 裁剪了，所以这里也裁剪一下才可以匹配成功
let staticPublicPath = config.publicPath.replace(config.basename, '')
if (process.env.NODE_ENV === 'development' || process.env.BUILD === '1') {
  // 开发模式用 webpack-dev-middleware 代理 js 文件
  var setupDevEnv = require('../build/setup-dev-env')
  app.use(setupDevEnv.setupClient(staticPublicPath))

  // 开发模式里，用 src 里的静态资源
  app.use(staticPublicPath, express.static(path.join(__dirname, '../../src')))
} else {
  app.use(staticPublicPath, express.static(config.staticPath))
}

app.use('/mock', (req, res, next) => {
  let {
    url: target
  } = req
  let filePath = path.join(__dirname, '../../src', `${target}.json`)
  try {
    let data = fs.readFileSync(filePath, 'utf-8').toString()
    res.send(data)
  } catch (error) {
    next(error)
  }
})

if (routes) {
  Object.keys(routes).forEach(key => {
    let route = routes[key]
    if (typeof route === 'function') {
      route(app)
    }
  })
}

app.use(page)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    var message = (err.message + '\n' + err.stack)
      .split('\n')
      .map(item => `<p style="margin:0;padding:0">${item}</p>`)
      .join('')
    res.send(message)
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json(err.message)
})
