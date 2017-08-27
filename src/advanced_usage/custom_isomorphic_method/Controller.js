import Controller from 'react-imvc/controller'
import React from 'react'
import Layout from '../../component/Layout'

export default class extends Controller {
    View = View
    initialState = {
        userAgent: ''
    }
    /**
     * context 里包含 isServer/isClient 字段
     * 标记当前是在 server 端还是 client
     * 可以通过条件判断，采用合适的方法，实现形式上的同构
     */
    getUserAgent() {
        let { context } = this
        if (context.isServer) {
            return context.req.headers['user-agent']
        } else if (context.isClient) {
            return navigator.userAgent
        }
    }
    /**
     * 
     * getInitialState 既会在服务端执行，也会在浏览器端执行
     * this.getUserAgent 不管在服务端还是浏览器端，都可以拿到一样的结果
     */
    getInitialState(initialState) {
        return {
            ...initialState,
            userAgent: this.getUserAgent(),
        }
    }
}

function View({ state }) {
    return (
        <Layout>
            <h2>
                User-Agent: {state.userAgent}
            </h2>
            <em>view source to see the user agent of server side</em>
        </Layout>
    )
}