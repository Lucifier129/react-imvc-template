import React from 'react'
import classnames from 'classnames'

const emptyStyle = {
    position: '',
    top: '',
    left: '',
    backgroundColor: '',
    width: '',
    minHeight: '',
    boxShadow: '',
    webkitBoxShadow: '',
}

export default function createViewManager(options={}) {
    const getStyle = style => {
        return Object.assign({
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: '#fff',
            width: '100%',
            minHeight: window.innerHeight + 'px',
            boxShadow: '-2px 2px 5px #eaeaea',
            webkitBoxShadow: '-2px 2px 5px #eaeaea',
        }, style, options.style)
    }
    return class ViewManager extends React.Component {
        static contextTypes = {
            location: React.PropTypes.object,
        }
        static defaultProps = {
            as: 'div'
        }
        state = {
            prevView: null,
        }
        scrollStore = {}
        getType() {
            if (!this.state.prevView) {
                return 'normal'
            } else if (this.context.location.action !== 'POP') {
                return 'in'
            } else {
                return 'out'
            }
        }
        emit(method) {
            if (typeof options[method] !== 'function') {
                return
            }
            let { current, previous, container, props } = this
            let data = { props, current, previous, container }
            let reset = () => {
                Object.assign(current.style, emptyStyle)
                Object.assign(previous.style, emptyStyle)
                this.setState({
                    prevView: null,
                })
            }
            let promise = options[method](data, reset)
            if (promise && typeof promise.then === 'function') {
                promise.then(reset).catch(error => alert(error))
            }
        }
        saveScroll = () => {
            let { location } = this.context
            this.scrollStore[location.raw] = window.scrollY
        }
        componentDidMount() {
            window.addEventListener('scroll', this.saveScroll)
        }
        componentWillUnmount() {
            window.removeEventListener('scroll', this.saveScroll)
        }
        componentWillReceiveProps(_, nextContext) {
            let currentLocation = this.context.location
            let nextLocation = nextContext.location
            if (currentLocation !== nextLocation) {
                this.setState({
                    prevView: this.props.children,
                    prevLocation: currentLocation,
                })
            }
        }
        componentDidUpdate() {
            let { current, previous, container } = this
            this.saveScroll()
            switch (this.getType()) {
                case 'in':
                    Object.assign(current.style, getStyle())
                    this.emit('onPageIn')
                    break
                case 'out':
                    let top = -this.scrollStore[this.state.prevLocation.raw]
                    Object.assign(previous.style, getStyle({
                        top: `${top}px`,
                    }))
                    this.emit('onPageOut')
                    break
            }
        }
        getContainer = container => {
            this.container = container
        }
        getCurrent = current => {
            this.current = current
        }
        getPrevious = previous => {
            this.previous = previous
        }
        renderNormal() {
            let { as: Tag, ...props } = this.props
            return (
                <Tag {...props}>
                    <div key="current">
                        {this.props.children}
                    </div>
                </Tag>
            )
        }
        renderIn() {
            let { as: Tag, ...props } = this.props
            let currView = this.props.children
            let prevView = this.state.prevView
            return (
                <Tag  {...props} ref={this.getContainer}>
                    <div key="current" ref={this.getCurrent}>
                        {currView}
                    </div>
                    <div key="previous" ref={this.getPrevious}>
                        {prevView}
                    </div>
                </Tag>
            )
        }
        renderOut() {
            let { as: Tag, ...props } = this.props
            let currView = this.props.children
            let prevView = this.state.prevView
            return (
                <Tag {...props} ref={this.getContainer}>
                    <div key="previous" ref={this.getPrevious}>
                        {prevView}
                    </div>
                    <div key="current" ref={this.getCurrent}>
                        {currView}
                    </div>
                </Tag>
            )
        }
        render() {
            switch (this.getType()) {
                case 'in': return this.renderIn()
                case 'out': return this.renderOut()
                default: return this.renderNormal()
            }
        }
    }
}