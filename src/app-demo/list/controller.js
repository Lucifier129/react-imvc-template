import Controller from 'react-imvc/controller'
import React, { Component } from 'react'
import Menu from '../component/Menu'

export default class extends Controller {
  View = View;
}

function View ({ state }) {
  return (
    <div>
      <Menu />
      {JSON.stringify(state)}
    </div>
  )
}
