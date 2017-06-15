import React, { Component, PropTypes } from 'react'
import _ from '../util'

const { setValueByPath, getValueByPath, debounce } = _

export default class Input extends Component {
  static contextTypes = {
    state: PropTypes.object,
    actions: PropTypes.object,
    handleInputChange: PropTypes.func
  };
  static defaultProps = {
    as: 'input',
    type: 'text',
    name: '',
    actionType: 'UPDATE_INPUT_VALUE',
    wait: 50
  };
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: this.getValue()
    }
    this.lock = false
    this.timer = null
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if (!this.lock) {
      this.setState({
        value: this.getValue(nextProps, nextContext)
      })
    }
  }
  render () {
    let { state, props } = this
    let { as, name, value, check, actionType, transformer, wait, ...subProps } = props
    let Tag = as

    subProps.value = value != null ? value : state.value
    subProps.name = name
    subProps.onChange = this.handleChange
    subProps.onFocus = this.handleFocus
    subProps.onBlur = this.handleBlur

    return <Tag {...subProps} />
  }
  handleChange = event => {
    let { onChange } = this.props
    let currentValue = event.currentTarget.value
    this.setState({
      value: currentValue,
    })
    onChange && onChange(event)
    this.sync(currentValue)
  }
  handleFocus = event => {
    let { onFocus, check } = this.props

    this.lock = true

    if (typeof check === 'function') {
      this.clearValidStatus()
    }

    onFocus && onFocus(event)
  };
  handleBlur = event => {
    let { onBlur, check } = this.props

    this.lock = false

    if (typeof check === 'function') {
      this.checkValidStatus()
    }

    this.updateValue()

    onBlur && onBlur(event)
  };
  updateValue = () => {
    let { context, props } = this
    let { name, check, transformer } = props
    let path = check ? `${name}.value` : name
    let currentValue = this.state.value
    let oldValue = getValueByPath(context.state, path)

    if (typeof transformer === 'function') {
      currentValue = transformer(currentValue, oldValue)
    }

    let { handleInputChange } = context

    if (handleInputChange) {
      currentValue = handleInputChange(path, currentValue, oldValue)
    }

    if (currentValue === oldValue) {
      return
    }

    this.setState({
      value: currentValue
    })
    
    let newGlobalState = setValueByPath(context.state, path, currentValue)
    this.setGlobalState(newGlobalState)
  }
  sync(currentValue) {
    clearTimeout(this.timer)
    this.timer = setTimeout(
      this.updateValue,
      this.props.wait
    )
  }
  getValue(props, context) {
    let { state } = context || this.context
    let { check, name } = props || this.props
    let path = check ? `${name}.value` : name
    return getValueByPath(state, path)
  }
  getAction () {
    return this.context.actions[this.props.actionType]
  }
  setGlobalState (newState) {
    let CALL_ACTION = this.getAction()
    CALL_ACTION(newState)
  }
  checkValidStatus() {
    let { name, onBlur, check } = this.props
    let currentValue = this.state.value
    let pathOfValidState = `${name}.isValid`
    let pathOfWranState = `${name}.isWarn`
    let isValidValue = check(currentValue)
    let newState = this.context.state

    newState = setValueByPath(newState, pathOfValidState, isValidValue)
    newState = setValueByPath(newState, pathOfWranState, !isValidValue)
    this.setGlobalState(newState)
  }
  clearValidStatus() {
    let { state } = this.context
    let { name } = this.props
    let path = `${name}.isWarn`
    let isWarn = getValueByPath(state, path)
    if (!isWarn) {
      return
    }

    let newState = setValueByPath(state, path, false)
    this.setGlobalState(newState)
  }
}
