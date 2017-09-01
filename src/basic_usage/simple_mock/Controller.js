import Controller from 'react-imvc/controller'
import View from './View'
import * as Model from './Model'

export default class IsomorphicFetch extends Controller {
    Model = Model
    View = View
    async componentWillCreate() {
        let { fetch, store } = this
        let state = store.getState()
        // 以 /mock/* 开头的 url 都会被转发到本地静态 json 文件里，json 后缀是自动补全的
        let url = `/mock/basic_usage/simple_mock/json/ssr`
        let ssr = await fetch(url)
        let { UPDATE_STATE } = store.actions
        UPDATE_STATE({ ssr })
    }
    async componentDidMount() {
        let { fetch, store } = this
        let state = store.getState()
        // 以 /mock/* 开头的 url 都会被转发到本地静态 json 文件里，json 后缀是自动补全的
        let url = `/mock/basic_usage/simple_mock/json/csr`
        // 延迟一秒
        await delay(1000)
        let csr = await fetch(url)
        let { UPDATE_STATE } = store.actions
        UPDATE_STATE({ csr })
    }
}

function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}