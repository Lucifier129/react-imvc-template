import React from 'react'
import { Link } from 'react-imvc/component'

export default function Layout ({ children, ...props }) {
  return (
    <div {...props}>
      <h1><Link to='/'>目录</Link></h1>
      <div>
        {children}
      </div>
    </div>
  )
}
