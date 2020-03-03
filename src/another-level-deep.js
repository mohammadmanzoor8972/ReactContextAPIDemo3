import React, { Component } from "react";

import Context from "./context";
console.log(Context);

export default class AnotherLevelDeep extends Component {
  static contextType = Context;

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    const { foo, baz } = this.context;
    return (
      <div>
        <h4>Here is the AnotherLevelDeep component</h4>
        <pre>Here is foo: {foo}</pre>
        <pre>Here is baz: {baz}</pre>
      </div>
    );
  }
}
