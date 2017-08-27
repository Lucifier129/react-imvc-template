import Controller from 'react-imvc/controller'
import View from './View'
import * as Model from './Model'

export default class EventHandler extends Controller {
    View = View;
    Model = Model;
    /**
     * 以 handleXXX 开头的箭头函数，会被收集到 handlers 里，传递进 view
     */
    handleClickButton = event => {
        /**
         * controller 的实例 this 里有 store 对象
         */
        let { store } = this
        let state = store.getState() // 获取当前 state
        /**
         * store.actions 是 actions 函数 currying 了第一个参数 state 后的新函数
         * UPDATE_STATE 是内置的 action 之一
         */
        let { UPDATE_STATE } = store.actions
        UPDATE_STATE({
            count: state.count + 2
        })
    }
}


