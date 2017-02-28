import React from 'react'
import ReactDOM from 'react-dom'

export function toJson(res) {
    return res.json()
}

export function toText(res) {
    return res.text()
}

export function isAbsoluteUrl(url) {
    return url.indexOf('http') === 0 || url.indexOf('//') === 0
}

export function mapValues(obj, fn) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = fn(obj[key], key);
    return result;
  }, {});
}

export function isImage(url) {
    let extname = url.substr(url.lastIndexOf('.') + 1)
    return /(jpg|png|gif|jepg)/.test(extname)
}

/*
*输入：'/Date(-62135596800000-0000)/'
*/
export function sqlDateFormat(time) {
    return new Date(+time.substring(6, time.length - 7))
}

function formatLength(x) {
    x = '' + x //转成string
    let len = 2
    while (x.length < len) {
        x = '0' + x //前置0
    }
    return x
} 
/*
*输出：'2016-11-11 12:00'
*/
export function getTime(date) {
    if (typeof date === 'number') {
        date = new Date(date)
    }
    let dateStr = [
        date.getFullYear(),
        formatLength(date.getMonth() + 1),
        formatLength(date.getDate())
    ].join('-')
    let timeStr = [
        formatLength(date.getHours()),
        formatLength(date.getMinutes()),
        formatLength(date.getSeconds())
    ].join(':')
    return `${dateStr} ${timeStr}`
}

/*
*输出：'2016-11-11'
*/
export function getDate(date) {
    if (typeof date === 'number') {
        date = new Date(date)
    }
    let dateStr = [
        date.getFullYear(),
        formatLength(date.getMonth() + 1),
        formatLength(date.getDate())
    ].join('-')
    return dateStr
}

export function getDateFromSQL(str) {
    if(!str){
        return ''
    }
    return getDate(sqlDateFormat(str))
}


/*
* input 2016-01-01
* output /Date(1422201600000+0800)/
*/
export function convertToSQLDate(date){
    let str = Date.parse(date)
    return `/Date(${str}+0800)/`
}


export function isThenable(obj) {
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

    let onClose = (event) => {
        props && props.onClose && props.onClose(event)
        closePopup()
    }
    ReactDOM.render(
        <Modal {...props} onClose={onClose} />,
        getModalContainer()
    )
}

export let closePopup = () => {
    ReactDOM.unmountComponentAtNode(getModalContainer())
}

export function setValueByPath(obj, path, value) {
    path = !Array.isArray(path) ? path.split('.') : path
    let list = path.reduce((list, key, index) => {
        if (index === path.length - 1) {
            list[index][key] = value
        } else {
            let item = list[index][key] = {...list[index][key]}
            list.push(item)
        }
        return list 
    }, [{...obj}])

    return list[0]
}

export function getValueByPath(obj, path) {
    path = !Array.isArray(path) ? path.split('.') : path
    return path.reduce((ret, key) => ret[key], obj)
}