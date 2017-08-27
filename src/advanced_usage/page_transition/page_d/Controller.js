import Controller from '../share/BaseController'
import React from 'react'
import { Link } from 'react-imvc/component'
import AnimateBothLayout from '../component/AnimateBothLayout'
import Layout from '../../../component/Layout'

export default class extends Controller {
    BaseView = AnimateBothLayout
    View = View
}

function View({ state }) {
    return (
        <Layout>
            <h2>页面转场空白页: {state.location.query.randomKey || 'first'}</h2>
            <div>
                <Link href="javascript:;" back>点击我回退至上一页</Link>
            </div>
            <div>
                <Link to={`/advanced_usage/page_transition/d?randomKey=${Math.random().toString(36).substr(2, 8)}`}>
                    点我新开页面
                </Link>
            </div>
            <div style={{height: 1000 }} />
            <Link href="javascript:;" back>点击我回退至上一页</Link>
        </Layout>
    )
}