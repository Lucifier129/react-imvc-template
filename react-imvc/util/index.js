import React from 'react'
import ReactDOM from 'react-dom'

export function toJson (res) {
  return res.json()
}

export function toText (res) {
  return res.text()
}

export function isAbsoluteUrl (url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

export function mapValues (obj, fn) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = fn(obj[key], key)
    return result
  }, {})
}

export function isImage (url) {
  let extname = url.substr(url.lastIndexOf('.') + 1)
  return /(jpg|png|gif|jepg)/.test(extname)
}

export function isThenable (obj) {
  return obj != null && typeof obj.then === 'function'
}

// 弹窗公共方法
const modals = {}

export let registerModal = (type, Modal) => {
  if (typeof type === 'object') {
    return Object.keys(type).forEach(key => registerModal(key, type[key]))
  }
  modals[type] = Modal
}

// 获取DOM结点
let getModalContainer = () => document.getElementById('modal')

export let openModal = ({ type, props }) => {
  let Modal = modals[type]
  if (!Modal) {
    return
  }

  let onClose = event => {
    props && props.onClose && props.onClose(event)
    closePopup()
  }
  ReactDOM.render(<Modal {...props} onClose={onClose} />, getModalContainer())
}

export let closePopup = () => {
  ReactDOM.unmountComponentAtNode(getModalContainer())
}

export function setValueByPath (obj, path, value) {
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

export function getValueByPath (obj, path) {
  path = !Array.isArray(path) ? path.split('.') : path
  return path.reduce((ret, key) => ret[key], obj)
}
