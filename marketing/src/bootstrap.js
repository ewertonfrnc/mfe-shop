import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If development, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// Running through container
export { mount };
