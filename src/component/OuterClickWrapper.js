import React, { Component, Children } from 'react'
import { findDOMNode } from 'react-dom'


export default class OuterClickWrapper extends Component {
	componentDidMount() {
		document.addEventListener('click', this.handleOutterClick)
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutterClick)
	}

	// 结点是否包含结点
	contains(rootNode, node) {
		if (rootNode.contains) {
			return rootNode.contains(node)
		}
		while (node) {
			if (node === rootNode) {
				return true
			}
			node = node.parentNode
		}

		return false
	}
	handleOutterClick = (event) => {
		let { onClick } = this.props
		if (!onClick) {
			return
		}
		let root = findDOMNode(this)
		let isContains = this.contains(root, event.target)
		if (!isContains) {
			onClick(event)
		}
	}
	render() {
		return Children.only(this.props.children)
	}
}