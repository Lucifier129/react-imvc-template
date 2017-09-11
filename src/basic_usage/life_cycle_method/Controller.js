import Controller from "react-imvc/controller";
import View from "./View";

/**
 * 生命周期方法的调用顺序为
 * getInitialState ->
 * shouldComponentCreate -> 
 * componentWillCreate -> 
 * componentDidMount -> 
 * componentWillUnmount
 */
export default class LifeCycleMethod extends Controller {
  View = View;
  /**
   * 
   * 获取初始化状态
   * Model 里的 initialState 通常是静态的
   * 有时我们需要动态地计算出初始化状态
   * getInitialState 生命周期方法会拿到静态的 initialState
   * 支持 async/await，可以阻塞后续的生命周期方法
   * 该方法在服务端执行过的话，就不会在浏览器端再执行
   */
  async getInitialState(initialState) {
    console.log('getInitialState')
    return initialState
  }
  /**
   * 是否创建和渲染组件
   * 如果返回 false，将不会渲染
   * 注意，return false 前应该用 this.redirect 重定向到别处
   * 支持 async/await，可以阻塞后续的生命周期方法
   * 该方法在服务端执行过的话，就不会在浏览器端再执行
   * 但 state 会在浏览器端复用
   */
  async shouldComponentCreate() {
    console.log('shouldComponentCreate')
  }
  /**
   * 组件即将创建
   * 在组件创建前使用 fetch 方法获取首屏数据是常用做法
   * 支持 async/await，可以阻塞后续的生命周期方法
   * 该方法在服务端执行过的话，就不会在浏览器端再执行
   * 但 state 会在浏览器端复用
   */
  async componentWillCreate() {
    console.log('componentWillCreate')
  }

   /**
   * 组件已第一次插入 DOM 树
   * componentDidFirstMount 方法从 react 组件里 hook 到 controller 而来
   * 该生命周期触发时，通常表明用户已经看到了首屏
   * 可以在这里调用 fetch 方法获取非首屏数据
   */
  async componentDidFirstMount() {
    console.log('componentDidFirstMount')
  }

  /**
   * 组件已插入 DOM 树
   * componentDidMount 方法从 react 组件里 hook 到 controller 而来
   * 可以在这里绑定定时器
   */
  async componentDidMount() {
    console.log('componentDidMount')
  }
  /**
   * 组件即将卸载
   * componentWillUnmount 方法从 react 组件里 hook 到 controller 而来
   * 该生命周期触发时，通常表明下一个 controller 的首屏即将显示
   * 可以在这里清除定时器等
   */
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  /**
   * 页面即将离开
   * 当页面跳转到别的 url 时，会触发该生命周期
   * 此时 view 可能还会继续存在一段时间，直到下一个 controller 的首屏渲染后替代它
   * return 一个字符串将会弹出一个 alert 框，提醒用户
   */
  pageWillLeave() {
    console.log('pageWillLeave')
    return 'pageWillLeave'
  }
  /**
   * 窗口即将关闭
   * 该方法跟 pageWillLeave 作用类似，只是触发条件为关闭浏览器窗口
   */
  windowWillUnload() {
    console.log('windowWillUnload')
    return 'windowWillUnload'
  }
  /**
   * 状态已经改变
   * 每当 action 函数导致 state 更新后，将触发 stateDidChange 生命周期
   * data 里包含了 action-type, action-payload, previous-state, current-state, start, end 等信息
   * 注意，当 stateDidChange 触发时，view 已经根据最新的 state 更新过了
   */
  stateDidChange(data) {
    console.log('stateDidChange', data)
  }
}
