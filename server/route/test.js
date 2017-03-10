import { Router } from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const router = Router()
export default router

router.get('/', (req, res) => {
  let time = new Date().toLocaleString()
  let content = ReactDOMServer.renderToStaticMarkup(<TestPage time={time} />)
  res.render('test', {
    content: content
  })
})

function TestPage ({ time }) {
  return (
    <div>
      <h1>测试普通服务端渲染的动态页面</h1>
      <p>当前服务端时间为：{time}</p>
    </div>
  )
}
