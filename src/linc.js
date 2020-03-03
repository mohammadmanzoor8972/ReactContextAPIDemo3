import React from "react";
import context from "./context";

class Linc extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { foo, baz } = this.context;
    return (
      <div>
        <h4>Here is the Far Level nested component</h4>
        <pre>Here is foo: {foo}</pre>
        <pre>Here is baz: {baz}</pre>
      </div>
    );
  }
}

Linc.contextType = context;

export default Linc;
