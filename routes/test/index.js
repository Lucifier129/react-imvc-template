import { Router } from 'express'
import View from './view'

const router = Router()

export default function (app) {
  app.use('/test_server', router)
}

router.get('/', isDevelopment, (req, res) => {
  res.render('test/view', {
    title: 'test_server',
    description: 'test simple server side rendering',
    keywords: 'test server render',
    content: '测试普通的服务端路由和渲染逻辑'
  })
})

function isDevelopment (req, res, next) {
  if (process.env.NODE_ENV !== 'development') {
    next(new Error('只在开发模式中可用'))
  } else {
    next()
  }
}
