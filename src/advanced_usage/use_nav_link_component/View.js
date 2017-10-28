import React from "react";
import { NavLink } from "react-imvc/component";
import Layout from "../../component/Layout";

export default function View() {
  return (
    <Layout>
      <div>使用 NavLink 组件响应当前 url 的匹配样式</div>
      <p>
        <NavLink
          to="/advanced_usage/use_nav_link_component/a"
          activeClassName="active"
          activeStyle={{ color: "red" }}
        >
          我是 A
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/advanced_usage/use_nav_link_component/b"
          activeClassName="active"
          activeStyle={{ color: "red" }}
        >
          我是 B
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/advanced_usage/use_nav_link_component/c"
          activeClassName="active"
          activeStyle={{ color: "red" }}
        >
          我是 C
        </NavLink>
      </p>
      <p>
        <NavLink
          isActive={isBC}
          activeClassName="active"
          activeStyle={{ color: "red" }}
        >
          我是 B 或 C 时高亮
        </NavLink>
      </p>
    </Layout>
  );
}

function isBC(path, location) {
    return /b|c/.test(location.raw.substr(-1))
}