import React, { Component, PropTypes } from 'react'
import Preload from './Preload'

export default function Style({ name }) {
	return <Preload as={PreloadStyle} name={name} />
}

function PreloadStyle(props) {
	return (
		<style
			type="text/css"
			data-preload={props['data-preload']}
			dangerouslySetInnerHTML={{__html: props.children }}
		/>
	)
}