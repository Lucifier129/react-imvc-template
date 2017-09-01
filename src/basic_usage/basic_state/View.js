import React from "react";
import { Link } from "react-imvc/component";
import Layout from "../../component/Layout";

export default function View({ state }) {
  let hasParams = Object.keys(state.location.params).length !== 0;
  return (
    <Layout>
      <div>默认填充基本的 state 状态</div>
      {!hasParams &&
        <div>
          <Link to="/basic_usage/basic_state/123">带路径参数的链接</Link>
        </div>}
      {hasParams &&
        <div>
          <Link to="/basic_usage/basic_state">不带路径参数的链接</Link>
        </div>}
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </Layout>
  );
}
