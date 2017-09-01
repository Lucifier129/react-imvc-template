import React from 'react'
import { Style, Link } from 'react-imvc/component'
import Layout from '../../component/Layout'

export default function View({ state }) {
    return (
        <Layout>
            <Style name="base" />
            <Style name={state.location.query.color || 'red'} />
            <div className="text">我是一个静态的 View，没有其他作用，但有样式</div>
            <div>
                <Link to="/basic_usage/import_css?color=red">red</Link>
            </div>
            <div>
                <Link to="/basic_usage/import_css?color=blue">blue</Link>
            </div>
        </Layout>
    )
}