import React from 'react'
import Controller from 'react-imvc/controller'
import { Input, EventWrapper } from 'react-imvc/component'

// test new component of EventWrapper
export default class extends Controller {
  View = View
  handleClick = () => {
    console.log('props 传递 click 的点击')
  }
  handleClick2 = () => {
    console.log('EventWrapper click 点击默认`div`标签')
  }
  handleClick3 = () => {
    console.log('EventWrapper click 按钮')
  }
  handleClick4 = () => {
    console.log('EventWrapper click 段落')
  }
  handleFocus2 = () => {
    console.log('EventWrapper focus 输入框')
  }
  handleMouseOver2 = () => {
    console.log('EventWrapper mouse over 段落')
  }
}

function View({ state, handlers }) {
  const { handleClick } = handlers
  return (
    <div>
      <h1>Test Controller</h1>
      <Parent handleClick={handleClick} />
    </div>
  )
}

function Parent({ handleClick }) {
  return (
    <div>
      <Child handleClick={handleClick} />
    </div>
  )
}

function Child(props) {
  const {
    handleClick,
  } = props
  return (
    <div>
      <Grandson handleClick={handleClick} />
    </div>
  )
}

function Grandson({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>NormalClick</button>
      <br />
      <br />
      <EventWrapper
        as="input"
        placeholder="代理`input`"
        onFocus='handleFocus2'
        onBlur={() => {
          console.log('就近 on blur')
        }}
      />
      <br />
      <br />
      <EventWrapper
        onClick='handleClick2'
        style={{
          border: '1px solid red'
        }}
      >
        代理点击
      </EventWrapper>
      <br />
      <EventWrapper
        as="button"
        onClick='handleClick3'
      >
        包装按钮点击事件
      </EventWrapper>
      <EventWrapper
        as="p"
        onClick='handleClick4'
        style={{
          border: '1px solid green'
        }}
        onMouseOver='handleMouseOver2'
      >
        包装段落点击事件
      </EventWrapper>
    </div>
  )
}