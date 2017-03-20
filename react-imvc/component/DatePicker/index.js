import React from 'react'
import { findDOMNode } from 'react-dom'
import styleContent from './style'

/**
 * 文档
 * Customizable date (and time) picker. Opt-in UI, no jQuery! https://bevacqua.github.io/rome
 * this.props.calendar 就是 rome 的 options 选项
 */
export default class DatePicker extends React.Component {
  componentDidMount () {
    // rome 不支持 node.js 服务端引入，在 didMount 时以 require 的方式引入
    let rome = require('rome')
    let input = this.refs.input
    let { calendar } = this.props
    let options = {
      time: false,
      ...calendar
    }
    this.rome = rome(input, options)
    this.rome.on('data', this.handleRomeData)
    // 添加样式
    createStyle()
  }
  componentWillUnmount () {
    if (this.rome) {
      this.rome.destroy()
    }
    // 删除样式
    destroyStyle()
  }
  handleRomeData = value => {
    let event = {
      currentTarget: {
        value: value
      }
    }
    this.handleChange(event)
  };
  handleChange = event => {
    let { onChange } = this.props
    onChange && onChange(event)
  };
  render () {
    let { calendar, children, ...props } = this.props
    return <input ref='input' {...props} onChange={this.handleChange} />
  }
}

/**
 * 只在必要时添加样式和删除样式
 */
let depsCount = 0
let styleElem = null
function createStyle () {
  depsCount += 1
  if (styleElem) {
    return
  }
  let style = document.createElement('style')
  style.type = 'text/css'
  style.textContent = styleContent
  document.head.appendChild(style)
  styleElem = style
}

function destroyStyle () {
  depsCount -= 1
  if (depsCount === 0) {
    styleElem.parentNode.removeChild(styleElem)
    styleElem = null
  }
}
