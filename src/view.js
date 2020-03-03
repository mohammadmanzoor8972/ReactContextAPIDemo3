import React from "react";

import Context from "./context";

import AnotherLevelDeep from "./another-level-deep";
import Linc from "./linc";

const View = () => (
  <>
    <Context.Consumer>
      {({ foo, baz }) => (
        <div>
          <h3>This is the view</h3>
          <pre>Here is foo: {foo}</pre>
          <pre>Here is baz: {baz}</pre>
        </div>
      )}
    </Context.Consumer>
    <AnotherLevelDeep />
    <Linc />
  </>
);

export default View;
