import React from 'react'
import { Input, Style } from 'react-imvc/component'
import Menu from '../component/Menu'

export default function View ({ state, handlers }) {
  return (
    <div>
      <Style name='test' />
      <Menu />
      <div>
        <h1>count: {state.count}</h1>
        <div>
          <button onClick={handlers.handleIncre}>
            加{state.num}
          </button>
          {' '}
          <button onClick={handlers.handleDecre}>
            减{state.num}
          </button>
          {' '}
          {/**
					 * Input 组件的 name 支持深度路径，a.b.c.d
					 * 此处只用一级路径，更新 num，将更新 state.num
					 */
          }
          <Input name='num' />
        </div>
        <div>
          我是展示 ajax 数据的容器：{JSON.stringify(state.test)}
        </div>
        <img
          src={`${state.publicPath}/app-template/img/Koala.jpg`}
          width={200}
        />
      </div>
    </div>
  )
}
