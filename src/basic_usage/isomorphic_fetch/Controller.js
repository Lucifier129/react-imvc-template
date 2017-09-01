import Controller from 'react-imvc/controller'
import View from './View'
import * as Model from './Model'

export default class IsomorphicFetch extends Controller {
    Model = Model
    View = View
    async componentWillCreate() {
        let { fetch, store } = this
        let state = store.getState()
        // fetch 一个静态资源 ssr.json
        let url = `${state.publicPath}/basic_usage/isomorphic_fetch/json/ssr.json`
        // fetch 方法默认会对非绝对路径，自动补全 restapi，raw 选项可以关闭自动补全
        let options = {
            method: 'GET',
            raw: true,
        }
        let ssr = await fetch(url, options)
        let { UPDATE_STATE } = store.actions
        UPDATE_STATE({ ssr })
    }
    async componentDidMount() {
        let { fetch, store } = this
        let state = store.getState()
        // fetch 一个静态资源 csr.json
        let url = `${state.publicPath}/basic_usage/isomorphic_fetch/json/csr.json`
        // fetch 方法默认会对非绝对路径，自动补全 restapi，raw 选项可以关闭自动补全
        let options = {
            method: 'GET',
            raw: true,
        }
        // 延迟一秒
        await delay(1000)
        let csr = await fetch(url, options)
        let { UPDATE_STATE } = store.actions
        UPDATE_STATE({ csr })
    }
}

function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}