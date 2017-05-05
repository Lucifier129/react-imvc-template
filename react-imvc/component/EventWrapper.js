import React, { Component, PropTypes } from 'react'

export default class EventWrapper extends Component {
  static defaultProps = {
    as: 'div',
  }
  static contextTypes = {
    handlers: PropTypes.object,
  }
  render() {
    const {
      children,
      as: Tag,
      ...restProps,
    } = this.props
    const { handlers } = this.context
    const props = {
      ...restProps
    }
    for (let key in restProps) {
      if (key.startsWith('on')) {
        if ('function' === typeof handlers[restProps[key]]) {
          props[key] = handlers[restProps[key]]
        } else if ('function' === typeof restProps[key]) {
          // `onEvent`自身为函数
          break
        } else {
          // 如果没有对应的`handler`赋值空操作
          props[key] = () => {}
        }
      }
    }
    return (
      <Tag {...props}>{children}</Tag>
    )
  }
}