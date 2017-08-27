import React from 'react'
import { Link } from 'react-imvc/component'
import Layout from '../../component/Layout'

export default function View() {
    return (
        <Layout>
            <div>Link 组件用来实现页面跳转</div>
            <p><Link to="/">点击我去首页，可以回退到本页</Link></p>
            <p><Link to="/" replace>点击我去首页，不可以回退到本页</Link></p>
            <p><Link to="/" back>点击我回退至上一个页面</Link></p>
        </Layout>
    )
}