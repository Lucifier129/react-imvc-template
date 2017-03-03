/**
 * high order component
 */
import React, { Component, PureComponent } from 'react'
import { accessProp } from './util'

const returnTrue = () => true

export let purify = () => InputComponent => {
  return class Pure extends PureComponent {
    render () {
      return <InputComponent {...this.props} />
    }
  }
}

export let shouldShow = check => InputComponent => {
  return function (props) {
    if (!check(props)) {
      return null
    }
    return <InputComponent {...props} />
  }
}
