import React from 'react'
import { Link } from 'react-imvc/component'

export default function Menu () {
  return (
    <ul>
      <li><Link to='/demo'>home</Link></li>
      <li><Link to='/demo/list'>list</Link></li>
      <li><Link to='/demo/detail'>detail</Link></li>
    </ul>
  )
}
