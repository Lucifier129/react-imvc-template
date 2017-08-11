import React, { Component } from 'react'
import { Link } from 'react-imvc/component'

export default function Menu () {
  return (
    <div>
      <Link to='/'>首页</Link>
      {' '}
      <Link to='/list'>列表</Link>
      {' '}
      <Link to='/detail'>详情</Link>
    </div>
  )
}
