import Controller from '../share/BaseController'
import View from './view'
import * as model from './model'

// 从 model 里取出初始化状态，和 actions 函数
const { initialState, ...actions } = model

export default class Test extends Controller {
  preload = {
    test: '/app-template/css/test.css'
  };
  View = View; // React 根组件
  initialState = initialState; // 初始化状态
  actions = actions; // action 函数

  // 事件处理函数以 handleXXX 开头，且必须为箭头函数写法
  handleIncre = event => {
    /**
		 * controller 里封装了几个实用对象，下面是其参考文档
		 * history doc:https://github.com/Lucifier129/history/tree/master/docs
		 * store doc: https://github.com/Lucifier129/relite#readme
		 * fetch doc: https://github.com/github/fetch#table-of-contents
		 */
    let { history, store, fetch } = this
    let state = store.getState()
    let { INCREMENT } = store.actions
    INCREMENT(state.num) // 调用 action，更新 store，触发自动更新 view
  };

  handleDecre = async event => {
    // 如果数据处理比较简单，
    // 可以使用内置的 action UPDATE_STATE 直接将新状态合并到 state
    let { store } = this
    let state = store.getState()
    let { UPDATE_STATE } = store.actions
    await new Promise(resolve => setTimeout(resolve, 1000))
    UPDATE_STATE({
      count: state.count - state.num
    })
  };

  /**
	 * 特殊的 handle，对 Input 组件的值做预处理
	 * @param  {[string]} path     更新 state 的路径
	 * @param  {[any]} currentValue input 组件当前的 value
	 * @param  {[any]} oldValue     state 里当前的值
	 * @return {[any]}              返回值，将被用以更新 state[path]
	 */
  handleInputChange = (path, currentValue, oldValue) => {
    switch (path) {
      case 'num':
        // 更新 num，必须为数字类型，否则用旧值
        return Number(currentValue) || oldValue
    }
    return currentValue
  };

  // 生命周期方法

  // 如果该仿佛返回 false，将不会渲染，支持 async/await
  async shouldComponentCreate () {
    console.log('shouldComponentCreate')
  }

  // 组件将创建，可以在这里发 ajax 请求，获取首屏数据
  async componentWillCreate () {
    let { UPDATE_STATE } = this.store.actions
    let state = this.store.getState()
    let test = await this.fetch(state.api.test)
    UPDATE_STATE({ test })
  }

  // react 组件的生命周期
  componentWillMount () {}
  componentDidMount () {
    console.log('cookie', this.cookie('test_cookie'))
    this.removeCookie('test_cookie')
    // this.cookie('test_cookie', 123, {
    //   expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    // })
  }
  componentWillUpdate () {}
  componentDidUpdate () {}
  componentWillUnmount () {}

  // 在跳转之前调用，return 的内容将作为抱大腿提示
  pageWillLeave () {
    return 'pageWillLeave'
  }

  // 在窗口关闭前调用，return 的内容将作为抱大腿提示
  windowWillUnload () {
    return 'windowWillUnload'
  }
}
