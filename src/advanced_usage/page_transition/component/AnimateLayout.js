import React from 'react'
import { Style } from 'react-imvc/component'
import Animate from './Animate'
import Layout from '../../../component/Layout'

export default function AnimateLayout({ state, children }) {
    return (
        <div>
            <Style name="normalize" />
            <Style name="animate" />
            <Style name="main" />
            <Animate animation={state.activeAnimateType}>
                {children}
            </Animate>
        </div>
    )
}