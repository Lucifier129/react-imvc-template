import Controller from '../../share/BaseController'
import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import querystring from 'querystring'
import * as _ from '../../share/util'
import * as validator from '../../share/validator'
import Input from '../../component/Input'
import Menu from '../component/Menu'
import Style from '../../component/Style'
import Preload from '../../component/Preload'
import Upload from 'rc-upload'

/**
 * 文档列表
 * history doc:https://github.com/Lucifier129/history/tree/master/docs
 * store doc: https://github.com/Lucifier129/relite#readme
 * fetch doc: https://github.com/github/fetch#table-of-contents
 * react doc: https://facebook.github.io/react/
 * express doc: http://expressjs.com/
 */
export default class Home extends Controller {
  preload = {
    main: '/css/main.css',
    stats: '/stats.json'
  };
  View = View;
  initialState = {
    text: '首页',
    count: 10,
    isOn: true,
    stats: null,
    date: '',
    form1: {
      name: '',
      pass: ''
    },
    form2: {
      name: {
        value: '',
        isValid: false,
        isWarn: false
      },
      email: {
        value: '',
        isValid: false,
        isWarn: false
      },
      pass: {
        value: '',
        isValid: false,
        isWarn: false
      },
      number: {
        value: '',
        isValid: false,
        isWarn: false
      }
    },
    imgSrc: null
  };
  actions = {
    INCREMENT (state) {
      return {
        ...state,
        count: state.count + 1
      }
    },
    DECREMENT (state) {
      return {
        ...state,
        count: state.count - 1
      }
    },
    async INCREMENT_ASYNC (state) {
      // 沉睡一秒
      await sleep(1000)
      return this.INCREMENT
    },
    async DECREMENT_ASYNC (state) {
      // 沉睡一秒
      await sleep(1000)
      return this.DECREMENT
    },
    TOGGLE_TIMER (state) {
      return {
        ...state,
        isOn: !state.isOn
      }
    }
  };

  shouldComponentCreate () {
    console.log('shouldComponentCreate')
  }
  componentWillCreate () {
    console.log('componentWillCreate')
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  async componentDidMount () {
    console.log('componentDidMount')
    // this.setTimer()
    // let data = await this.handleShowLoginPopup()
    // console.log('login-data', data)
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
  }
  // 在跳转到别的页面之前，清理定时器
  pageWillLeave () {
    this.clearTimer()
    console.log('pageWillLeave')
  }
  windowWillUnload () {
    console.log('windowWillUnload')
  }
  setTimer () {
    let { INCREMENT } = this.store.actions
    // 每秒加1
    this.timer = setInterval(INCREMENT, 1000)
  }

  clearTimer () {
    clearInterval(this.timer)
  }

  handleIncre = () => {
    let {
      INCREMENT
    } = this.store.actions
    INCREMENT()
  };
  handleIncreAsync = async () => {
    let {
      INCREMENT_ASYNC
    } = this.store.actions
    await INCREMENT_ASYNC()
    console.log('异步加一完毕')
  };
  handleDecre = () => {
    let {
      DECREMENT
    } = this.store.actions
    DECREMENT()
  };
  handleDecreAsync = () => {
    let {
      DECREMENT_ASYNC
    } = this.store.actions
    DECREMENT_ASYNC()
  };
  handleToggle = () => {
    let {
      TOGGLE_TIMER
    } = this.store.actions
    TOGGLE_TIMER()
    let {
      isOn
    } = this.store.getState()
    if (isOn) {
      this.setTimer()
    } else {
      this.clearTimer()
    }
  };
  handleUpload = data => {
    let { FileFtpPath } = data
    let { UPDATE_STATE } = this.store.actions
    let imgSrc = this.ftpToHttp(FileFtpPath)
    UPDATE_STATE({
      imgSrc
    })
  };
  handleCheckAll = event => {
    let state = this.store.getState()
    let { UPDATE_STATE } = this.store.actions

    let form2 = _.mapValues(state.form2, (item, key) => ({
      ...item,
      isWarn: !item.isValid
    }))
    UPDATE_STATE({ form2 })
  };
  handleClearWarning = event => {
    let state = this.store.getState()
    let { UPDATE_STATE } = this.store.actions

    let form2 = _.mapValues(state.form2, (item, key) => ({
      ...item,
      isWarn: false
    }))

    UPDATE_STATE({ form2 })

    let postForm = _.mapValues(state.form2, item => item.value)
    console.log('postForm', postForm)
  };
}

function sleep (timeout = 1000) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

function View ({ state, handlers }) {
  let {
    form2
  } = state
  return (
    <div>
      <Style name='main' />
      <Preload name='stats' />
      <Menu />
      <h1>{state.text} {state.count}</h1>
      <div>
        <button onClick={handlers.handleIncre}>加一</button>
        <button onClick={handlers.handleDecre}>减一</button>
        <button onClick={handlers.handleIncreAsync}>异步加一</button>
        <button onClick={handlers.handleDecreAsync}>异步减一</button>
        <button onClick={handlers.handleToggle}>
          {state.isOn ? '关闭定时器' : '打开定时器'}
        </button>
      </div>
      <div>
        form1-name:<Input name='form1.name' />
        form1-pass:<Input name='form1.pass' />
      </div>
      <div>
        form2-name:
        <Input
          name='form2.name'
          check={validator.isNotEmpty}
          style={{
            borderColor: form2.name.isWarn ? 'red' : null
          }}
        />
        form2-email:
        <Input
          name='form2.email'
          check={validator.isEmail}
          style={{
            borderColor: form2.email.isWarn ? 'red' : null
          }}
        />
        form2-pass:
        <Input
          name='form2.pass'
          check={validator.isNotEmpty}
          style={{
            borderColor: form2.pass.isWarn ? 'red' : null
          }}
        />
        form2-number:
        <Input
          name='form2.number'
          check={validator.isNumeric}
          style={{
            borderColor: form2.number.isWarn ? 'red' : null
          }}
        />
      </div>
      <div>
        <button onClick={handlers.handleCheckAll}>
          检查 form2 的全部表单的正确性
        </button>
        {' '}
        <button onClick={handlers.handleClearWarning}>
          清空 form2 的全部表单警示样式
        </button>
      </div>
      {!!state.imgSrc && <img src={state.imgSrc} />}
      <div />
    </div>
  )
}
