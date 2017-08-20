import React from "react";
import Layout from "../../component/Layout";

/**
 * 
 * 组件的 props 里直接有 state 和 actions 对象
 */
export default function View({ state, actions }) {
  const { INCREMENT, DECREMENT } = actions;
  return (
    <Layout>
      <h2>
        Count: {state.count}
      </h2>
      <div>
        <button onClick={INCREMENT}>+1</button>
      </div>
      <div>
        <button onClick={DECREMENT}>-1</button>
      </div>
    </Layout>
  );
}
