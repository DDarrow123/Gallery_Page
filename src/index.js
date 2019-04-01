import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheets/index.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "velocity-animate/velocity.ui";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change unregister() to register() below.
//service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
