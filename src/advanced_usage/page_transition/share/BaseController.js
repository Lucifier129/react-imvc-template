import Controller from 'react-imvc/controller'

export default class extends Controller {
    preload = {
        'normalize': '/advanced_usage/page_transition/css/normalize.css',
        'animate': '/advanced_usage/page_transition/css/animate.css',
    }
    getInitialState(initialState) {
        return {
            ...initialState,
            activeAnimateType: this.cookie('animateType') || 'slideInRight'
        }
    }
}