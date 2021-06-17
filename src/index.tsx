import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import reportWebVitals from "./reportWebVitals";
import "./styles/reset.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
