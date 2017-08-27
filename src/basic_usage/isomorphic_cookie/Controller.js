import Controller from 'react-imvc/controller'
import View from './View'
import * as Model from './Model'

/**
 * 用 cookie 来持久化存储 count 信息，在 getInitialState 时获取，在页面离开或关闭前保存
 */
export default class IsomorphicCookie extends Controller {
    View = View;
    Model = Model;
    getInitialState(initialState) {
        return {
            ...initialState,
            count: this.getCount(),
        }
    }
    getCount() {
        return Number(this.cookie('count')) || 0
    }
    saveCount() {
        let state = this.store.getState()
        return this.cookie('count', state.count)
    }
    pageWillLeave() {
        this.saveCount()
    }
    windowWillUnload() {
        this.saveCount()
    }
}


