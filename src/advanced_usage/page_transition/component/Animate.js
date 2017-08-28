import React from 'react'
import createViewManager from './createViewManager'

export default createViewManager({
    async onPageIn({ props, current }) {
        let animation = props.animation
        let classList = ['animation-duration-400ms', 'animated', animation]
        classList.forEach(className => current.classList.add(className))
        await waitForAnimationEnd(current)
        window.scrollTo(0, 0)
        classList.forEach(className => current.classList.remove(className))
    },
    async onPageOut({ props, previous }) {
        let animation = props.animation.replace('In', 'Out')
        let classList = ['animation-duration-400ms', 'animated', animation]
        classList.forEach(className => previous.classList.add(className))
        await waitForAnimationEnd(previous)
        classList.forEach(className => previous.classList.remove(className))
    },
})

function waitForAnimationEnd(node) {
    return new Promise(resolve => {
        let handleAnimationEnd = ({ type, currentTarget, target }) => {
            if (currentTarget !== target) {
                return
            }
            node.removeEventListener('animationEnd', handleAnimationEnd)
            node.removeEventListener('webkitAnimationEnd', handleAnimationEnd)
            resolve()
        }
        node.addEventListener('animationEnd', handleAnimationEnd)
        node.addEventListener('webkitAnimationEnd', handleAnimationEnd)
    })
}


