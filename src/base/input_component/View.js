import React from "react";
import { Input } from 'react-imvc/component'
import Layout from "../../component/Layout";

/**
 * 
 * 组件的 props 里直接有 state 和 actions 对象
 * Input 组件的 name 属性支持 path
 * 可以是: a.b.c.e 的写法
 * 也可以是 a/b/c/e 的写法
 * 其 transformer 属性可以用来转换数据类型
 */
export default function View({ state, actions }) {
  const { INCREMENT, DECREMENT } = actions;
  return (
    <Layout>
      <h2>
        Count: {state.count}
      </h2>
      <div>
        <Input name="num" transformer={Number} />
      </div>
      <div>
        <button onClick={INCREMENT}>+{state.num}</button>
      </div>
      <div>
        <button onClick={DECREMENT}>-{state.num}</button>
      </div>
    </Layout>
  );
}
