import React from 'react'
import Controller from 'react-imvc/controller'
import { Input, EventWrapper } from 'react-imvc/component'

// test new component of EventWrapper
export default class extends Controller {
  View = View
  handleClick = () => {
    console.log('click')
  }
  handleClick2 = () => {
    console.log('click 22')
  }
  handleClick3 = () => {
    console.log('click 333')
  }
  handleClick4 = () => {
    console.log('click 4444')
  }
  handleFocus2 = () => {
    console.log('focus 22')
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
          console.log('on blur')
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
        btnGo
      </EventWrapper>
      <br />
      <EventWrapper
        as="button"
        onClick='handleClick3'
      >
        btnGo
      </EventWrapper>
      <EventWrapper
        as="p"
        onClick='handleClick4'
        style={{
          border: '1px solid green'
        }}
      >
        some paragraph
      </EventWrapper>
    </div>
  )
}