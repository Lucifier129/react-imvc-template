import React from 'react'
import Controller from 'react-imvc/controller'
import { Style } from 'react-imvc/component'
import AnimateBoth from '../../page_transition/component/AnimateBoth'
import Layout from '../../../component/Layout'

export default class extends Controller {
    preload = {
        'normalize': '/advanced_usage/page_transition/css/normalize.css',
        'animate': '/advanced_usage/page_transition/css/animate.css',
        'main': '/advanced_usage/page_transition/css/main.css',
    }
    BaseView = BaseView;
    KeepAlive = true;
}

function BaseView({ children }) {
    return (
        <div>
            <Style name="normalize" />
            <Style name="animate" />
            <Style name="main" />
             <AnimateBoth animation="zoomInDown">
                <Layout>{children}</Layout>
            </AnimateBoth>
        </div>
    )
}