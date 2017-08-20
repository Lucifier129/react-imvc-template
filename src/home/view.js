import React from "react";
import { Link } from "react-imvc/component";
import Layout from "../component/Layout";

export default function View({ state }) {
  return (
    <Layout>
      {state.contents.map(({ type, list }) => {
        return (
          <div key={type}>
            <h2>
              {type}
            </h2>
            <List data={list} />
          </div>
        );
      })}
    </Layout>
  );
}

function List({ data }) {
  return (
    <ul>
      {data.map(item => <ListItem key={item.url} {...item} />)}
    </ul>
  );
}

function ListItem({ title, url, raw, ...rest }) {
  return (
    <li>
      {!!raw &&
        <a href={url} {...rest}>
          {title}
        </a>}
      {!raw &&
        <Link to={url} {...rest}>
          {title}
        </Link>}
    </li>
  );
}
