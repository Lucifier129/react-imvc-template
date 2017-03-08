import fs from 'fs'
import express from 'express'
import compression from 'compression'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
import helmet from 'helmet'
import pkg from '../package'
import createViewEngine from './middleware/createViewEngine'
import shareRoot from './middleware/shareRoot'
import config from './config'
import page from './route/page'

const app = express()

export default app

app.use(shareRoot(config.basename))
app.use(helmet())
app.use(compression())
// app.use(favicon(path.join(__dirname, '../static/favicon.ico')))

app.engine(
  'html',
  createViewEngine({
    defaults: config
  })
)

// view engine setup
app.set('views', __dirname + '/view')
app.set('view engine', 'html')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cookieParser())

app.get('/slbhealthcheck.html', (req, res) => {
  res.send('slbhealthcheck ok')
})

// 开发模式用 webpack-dev-middleware 代理 js 文件
if (process.env.NODE_ENV === 'development') {
  var setupDevEnv = require('../build/setup-dev-env')
  app.use(setupDevEnv.setupClient())
}

// shareRoot 中间件把 config.basename 裁剪了，所以这里也裁剪一下才可以匹配成功
let staticPublicPath = config.publicPath.replace(config.basename, '')
app.use(
  staticPublicPath,
  express.static(path.join(__dirname, config.staticPath))
)

app.use('/mock', (req, res, next) => {
  let { url: target } = req
  let filePath = path.join(__dirname, '../src', `${target}.json`)
  try {
    let data = fs.readFileSync(filePath, 'utf-8').toString()
    res.json(JSON.parse(data))
  } catch (error) {
    next(error)
  }
})

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
    res.send(err.stack || err.message)
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json(err.message)
})
