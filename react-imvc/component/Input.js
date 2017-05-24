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
      value: props.value != null ? props.value : this.getValue()
    }
    this.handleChange = debounce(
      this.handleChange,
      props.wait
    )
  }
  render () {
    let { state, props } = this
    let { as, name, value, check, actionType, transformer, wait, ...subProps } = props
    let Tag = as

    subProps.value = value != null ? value : state.value
    subProps.name = name
    subProps.onChange = this.handleValueChange
    if (check) {
      subProps.onFocus = this.handleFocus
      subProps.onBlur = this.handleBlur
    }

    return <Tag {...subProps} />
  }
  getValue() {
    let { state } = this.context
    let { check, name } = this.props
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
  handleValueChange = event => {
    this.setState({
      value: event.target.value,
    })
    event.persist()
    this.handleChange(event)
  }
  handleChange(event) {
    let { state, handleInputChange } = this.context
    let { name, onChange, check, transformer } = this.props
    let currentValue = event.target.value
    let path = check ? `${name}.value` : name
    let oldValue = getValueByPath(state, path)

    if (typeof transformer === 'function') {
      currentValue = transformer(currentValue, oldValue)
    }
    if (handleInputChange) {
      currentValue = handleInputChange(path, currentValue, oldValue)
    }
    
    let newState = setValueByPath(state, path, currentValue)

    this.setGlobalState(newState)
    onChange && onChange(event)
  }
  handleFocus = event => {
    let { state } = this.context
    let { name, onFocus } = this.props
    let path = `${name}.isWarn`
    let isWarn = getValueByPath(state, path)
    if (!isWarn) {
      return
    }
    let newState = setValueByPath(state, path, false)

    this.setGlobalState(newState)
    onFocus && onFocus(event)
  };
  handleBlur = event => {
    let state = this.context.state
    let { name, onBlur, check } = this.props
    let pathOfValidState = `${name}.isValid`
    let pathOfWranState = `${name}.isWarn`

    let isValidValue = check(event.target.value)
    let newState = state

    newState = setValueByPath(newState, pathOfValidState, isValidValue)
    newState = setValueByPath(newState, pathOfWranState, !isValidValue)

    this.setGlobalState(newState)
    onBlur && onBlur(event)
  };
}
