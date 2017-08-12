import Controller from 'react-imvc/controller'
import React from 'react'

export default class Deep extends Controller {
	View = View
}

function View({ }) {
	return <div>deep</div>
}