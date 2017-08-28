import React from 'react'
import createViewManager from './createViewManager'

export default createViewManager({
    async animate(animation, inElement, outElement, scrollToTop=false) {
        let inClassList = ['animated', 'animation-duration-400ms', animation.in]
        let outClassList = ['animated', 'animation-duration-400ms', animation.out]
        inClassList.forEach(className => inElement.classList.add(className))
        outClassList.forEach(className => outElement.classList.add(className))
        await Promise.all([
            waitForAnimationEnd(inElement), waitForAnimationEnd(outElement)
        ])
        if (scrollToTop) {
            window.scrollTo(0, 0)
        }
        inClassList.forEach(className => inElement.classList.remove(className))
        outClassList.forEach(className => outElement.classList.remove(className))
    },
    onPageIn({ props, current, previous }) {
        let animation = getAnimation(props.animation, false)
        return this.animate(animation, current, previous, true)
    },
    onPageOut({ props, current, previous }) {
        let animation = getAnimation(props.animation, true)
        return this.animate(animation, current, previous, false)
    },
})

function getAnimation(inAnimation, isPageOut) {
    let outAnimation = inAnimation.replace('In', 'Out')
    let animation = {
        in: inAnimation,
        out: outAnimation,
    }
    let key = isPageOut ? 'in' : 'out'

    if (isPageOut) {
        if (animation.in.includes('Up')) {
            animation.in = animation.in.replace('Up', 'Down')
            animation.out = animation.out.replace('Up', 'Down')
        } else if (animation.in.includes('Down')) {
            animation.in = animation.in.replace('Down', 'Up')
            animation.out = animation.out.replace('Down', 'Up')
        }
        if (animation.in.includes('Left')) {
            animation.in = animation.in.replace('Left', 'Right')
        } else if (animation.in.includes('Right')) {
            animation.in = animation.in.replace('Right', 'Left')
        }
    } else {
        if (animation.in.includes('Left')) {
            animation.out = animation.out.replace('Left', 'Right')
        } else if (animation.in.includes('Right')) {
            animation.out = animation.out.replace('Right', 'Left')
        }
    }
    
    return animation
}

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


