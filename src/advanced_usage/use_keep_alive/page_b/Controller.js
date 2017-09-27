import Controller from 'react-imvc/controller'
import React from 'react'
import { Link } from 'react-imvc/component'
import Layout from '../../../component/Layout'

export default class extends Controller {
    KeepAlive = true
    View = View
    initialState = {
        shouldComponentCreate: 0,
        componentWillCreate: 0,
        componentDidFirstMount: 0,
        componentDidMount: 0,
        componentWillUnmount: 0,
        pageWillLeave: 0,
        pageDidBack: 0,
    }
    updateCount(type) {
        let state = this.store.getState()
        let { UPDATE_STATE } = this.store.actions
        UPDATE_STATE({
            [type]: state[type] + 1
        })
    }
    shouldComponentCreate() {
        this.updateCount('shouldComponentCreate')
    }
    componentWillCreate() {
        this.updateCount('componentWillCreate')
    }
    componentDidFirstMount() {
        this.updateCount('componentDidFirstMount')
    }
    componentDidMount() {
        this.updateCount('componentDidMount')
    }
    componentWillUnmount() {
        this.updateCount('componentWillUnmount')
    }
    pageWillLeave() {
        this.updateCount('pageWillLeave')
    }
    pageDidBack() {
        this.updateCount('pageDidBack')
    }
}


function View({ state }) {
    return (
        <Layout>
            <h2>I am Page B</h2>
            <div>
                <Link to="/advanced_usage/use_keep_alive/a">去 Page A</Link>
                {' '}
                <Link href="javascript:;" back>回退</Link>
                {' '}
                <Link href="javascript:;" forward>前进</Link>
            </div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </Layout>
    )
}