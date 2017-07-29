import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Preload extends Component {
  static contextTypes = {
    preload: PropTypes.object
  };
  static defaultProps = {
    as: 'div'
  };
  render () {
    let { preload } = this.context
    let { name, as: Tag, ...props } = this.props
    let content = preload[name]
    if (Tag == null || content == null) {
      return null
    }
    return (
      <Tag {...props} data-preload={name}>
        {content}
      </Tag>
    )
  }
}
