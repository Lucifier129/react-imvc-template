import BaseController from "../../share/BaseController";
import React from "react";

export default class Chat extends BaseController {
  // layout = 'plain'
  View = View;
  initialState = {
    html: {
      title: "test title1",
      keywords: "a b c d",
      description: "test render palin html",
      head: `<noscript>head</noscript>`,
      header: `<noscript>header</noscript>`,
      footer: `<noscript>footer</noscript>`,
      ending: `<noscript>ending</noscript>`
    },
    text: "gdf",
    count: 0
  };
  handleIncre = () => {
    console.log("abc");
    let state = this.store.getState();
    let { UPDATE_STATE } = this.store.actions;
    UPDATE_STATE({
      count: state.count + 1
    });
  };
  componentDidMount() {
    console.log("didMount");
  }
}

function View({ state, handlers }) {
  return (
    <div onClick={handlers.handleIncre}>
      {state.count} {state.text}
    </div>
  );
}
