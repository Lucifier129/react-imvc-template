import React, { Component } from 'react'
import { Link } from 'react-imvc/component'

export default function Menu () {
  return (
    <div>
      <Link to='/template'>首页</Link>
      {' '}
      <Link to='/template/list'>列表</Link>
      {' '}
      <Link to='/template/detail'>详情</Link>
    </div>
  )
}
