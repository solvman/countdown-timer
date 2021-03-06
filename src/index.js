import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { IconContext } from "react-icons";

ReactDOM.render(
  <IconContext.Provider value={{ className: "react-icons" }}>
    <Provider store={store}>
      <App />
    </Provider>
  </IconContext.Provider>,
  document.getElementById("root")
);
