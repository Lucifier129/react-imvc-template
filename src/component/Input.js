import React, { Component, PropTypes } from 'react'
// test

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
    actionType: 'UPDATE_INPUT_VALUE'
  };
  render () {
    let { state } = this.context
    let { as, name, value, check, actionType, ...subProps } = this.props
    let Tag = as

    let path = check ? `${name}.value` : name

    if (value === undefined) {
      value = getValueByPath(state, path)
    }

    subProps.value = value
    subProps.name = name
    subProps.onChange = this.handleChange
    if (check) {
      subProps.onFocus = this.handleFocus
      subProps.onBlur = this.handleBlur
    }

    return <Tag {...subProps} />
  }
  getAction () {
    return this.context.actions[this.props.actionType]
  }
  setGlobalState (newState) {
    let CALL_ACTION = this.getAction()
    CALL_ACTION(newState)
  }
  handleChange = event => {
    let { state, handleInputChange } = this.context
    let { name, onChange, check } = this.props
    let currentValue = event.currentTarget.value
    let path = check ? `${name}.value` : name
    let oldValue = getValueByPath(state, path)
    let value = handleInputChange(path, currentValue, oldValue)
    let newState = setValueByPath(state, path, value)

    this.setGlobalState(newState)
    onChange && onChange(event)
  };
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

    let isValidValue = check(event.currentTarget.value)
    let newState = state

    newState = setValueByPath(newState, pathOfValidState, isValidValue)
    newState = setValueByPath(newState, pathOfWranState, !isValidValue)

    this.setGlobalState(newState)
    onBlur && onBlur(event)
  };
}

function setValueByPath (obj, path, value) {
  path = !Array.isArray(path) ? path.split('.') : path
  let list = path.reduce(
    (list, key, index) => {
      if (index === path.length - 1) {
        list[index][key] = value
      } else {
        let item = list[index][key] = { ...list[index][key] }
        list.push(item)
      }
      return list
    },
    [{ ...obj }]
  )

  return list[0]
}

function getValueByPath (obj, path) {
  path = !Array.isArray(path) ? path.split('.') : path
  return path.reduce((ret, key) => ret[key], obj)
}
