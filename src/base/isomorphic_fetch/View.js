import React from 'react'
import Layout from '../../component/Layout'

export default function View({ state }) {
    return (
        <Layout>
            <h2>首屏数据</h2>
            <pre>{JSON.stringify(state.ssr)}</pre>
            <h2>非首屏数据</h2>
            <pre>{JSON.stringify(state.csr)}</pre>
        </Layout>
    )
}