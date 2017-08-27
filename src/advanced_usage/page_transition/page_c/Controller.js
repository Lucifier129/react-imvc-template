import Controller from '../share/BaseController'
import React from 'react'
import querystring from 'querystring'
import { Link } from 'react-imvc/component'
import AnimateBothLayout from '../component/AnimateBothLayout'
import Layout from '../../../component/Layout'

const initialState = {
    animateTypeList: [
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'flipInX',
        'flipInY',
        'lightSpeedIn',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'rollIn',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp'
    ]
}

export default class extends Controller {
    BaseView = AnimateBothLayout
    View = View
    initialState = initialState
    handleChangeAnimateType = ({ currentTarget }) => {
        let animateType = currentTarget.getAttribute('data-animation')
        this.cookie('animateType', animateType)
        this.history.push('/advanced_usage/page_transition/d')
    }
}

function View({ state, handlers }) {
    let { animateTypeList, activeAnimateType } = state
    let { handleChangeAnimateType } = handlers

    return (
        <Layout>
            <h2>页面转场效果列表页</h2>
            <p>点击下列链接，体验带联动效果的转场动画</p>
            <ul>
            {
                animateTypeList.map(animateType => {
                    let style = {
                        'color': animateType === activeAnimateType ? 'red' : 'blue',
                        'textDecoration': 'underline',
                        'marginBottom': 10
                    }
                    return (
                        <li>
                            <div
                                style={style}
                                data-animation={animateType}
                                onClick={handleChangeAnimateType}
                            >
                                {animateType}
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </Layout>
    )
}