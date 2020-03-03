import React from "react";
import ReactDOM from "react-dom";

import View from "./view";
import "./styles.css";

class App extends React.Component {
  render() {
    return <View />;
  }
}



const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
