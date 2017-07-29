import React from 'react'
import ReactDOM from 'react-dom'

export default {
  toJson,
  toText,
  isAbsoluteUrl,
  mapValues,
  isImage,
  isThenable,
  registerModal,
  openModal,
  closePopup,
  setValueByPath,
  getValueByPath,
  debounce,
}

function toJson (res) {
  return res.json()
}

function toText (res) {
  return res.text()
}

function isAbsoluteUrl (url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

function mapValues (obj, fn) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = fn(obj[key], key)
    return result
  }, {})
}

function isImage (url) {
  let extname = url.substr(url.lastIndexOf('.') + 1)
  return /(jpg|png|gif|jepg)/.test(extname)
}

function isThenable (obj) {
  return obj != null && typeof obj.then === 'function'
}

// 弹窗公共方法
const modals = {}

function registerModal(type, Modal) {
  if (typeof type === 'object') {
    return Object.keys(type).forEach(key => registerModal(key, type[key]))
  }
  modals[type] = Modal
}

// 获取DOM结点
let getModalContainer = () => document.getElementById('modal')

function openModal({ type, props }) {
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

function closePopup() {
  ReactDOM.unmountComponentAtNode(getModalContainer())
}

function setValueByPath (obj, path, value) {
  path = !Array.isArray(path) ? path.split('.') : path
  let list = path.reduce(
    (list, key, index) => {
      if (index === path.length - 1) {
        list[index][key] = value
      } else {
        let target = list[index][key]
        if (Array.isArray(target)) {
          target = target.concat()
        } else {
          target = {...target}
        }
        list[index][key] = target
        list.push(target)
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

function debounce(fn, wait=0) {
  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(
      () => fn.apply(this, args),
      wait
    )
  }
}