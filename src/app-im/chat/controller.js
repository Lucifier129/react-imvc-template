import BaseController from '../../share/BaseController'
import React from 'react'

export default class Chat extends BaseController {
	head = `
	<script
	`
	body = `
	adfadsf
	`
	View = View
	initialState = {
		text: 'gdf',
		count: 0
	}
	actions = {
		MY_ACTION(state, payload) {
			return {
				...state,
				abc: handle(payload)
			}
		}
	}
	handleIncre = async () => {
		let state = await this.store.getState()
		let { UPDATE_STATE } = this.store.actions
		UPDATE_STATE({
			count: state.count + 1
		})
	}
	async componentWillCreate() {
		let { history, store, fetch } = this
		// history.push('/abc')
		let data = await Promise.race([dealy(3000), fetch('/abc')])
		data = data || []
		let { UPDATE_STATE, MY_ACTION } = store.actions
		MY_ACTION(data)
		UPDATE_STATE(data)
	}
	pageWillLeave() {
		return 'adafadsf'
	}
	windowWillUnload() {
		return 'aadf'
	}
}

function View({ state, handlers }) {
	return (
		<div onClick={handlers.handleIncre}>
			{state.count} {state.text}
		</div>
	)
}