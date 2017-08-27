import React from 'react'
import createViewManager from './createViewManager'

export default createViewManager({
    async onPageIn({ props, current }) {
        let animation = props.animation
        let classList = current.classList
        classList.add('animated')
        classList.add(animation)
        await waitForAnimationEnd(current)
        window.scrollTo(0, 0)
        classList.remove('animated')
        classList.remove(animation)
    },
    async onPageOut({ props, previous }) {
        let animation = props.animation.replace('In', 'Out')
        let classList = previous.classList
        classList.add('animated')
        classList.add(animation)
        await waitForAnimationEnd(previous)
        classList.remove('animated')
        classList.remove(animation)
    },
})

function waitForAnimationEnd(node) {
    return new Promise(resolve => {
        let handleAnimationEnd = ({ currentTarget, target }) => {
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


