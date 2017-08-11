import React from 'react'
import Controller from '../share/BaseController'
import Menu from '../component/Menu'

export default class NotFound extends Controller {
  View = View;
}

function View ({ state, handlers }) {
  return (
    <div>
      <Menu />
      <div>
        404: 找不到 {state.location.pathname} 的控制器
      </div>
    </div>
  )
}
