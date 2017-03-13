import React from 'react'
import Contrller from 'react-imvc/controller'
import { Link } from 'react-img/component'

export default class NotFound extends Contrller {
  View = View;
}

function View () {
  return <h1>荒野地带</h1>
}
