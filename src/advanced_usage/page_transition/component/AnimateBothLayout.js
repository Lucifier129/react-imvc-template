import React from 'react'
import { Style } from 'react-imvc/component'
import AnimateBoth from './AnimateBoth'
import Layout from '../../../component/Layout'

export default function AnimateLayout({ state, children }) {
    return (
        <div>
            <Style name="normalize" />
            <Style name="animate" />
            <Style name="main" />
            <AnimateBoth animation={state.activeAnimateType}>
                {children}
            </AnimateBoth>
        </div>
    )
}