import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Sidebar from './components/components';
import App from "./App";
import transition from './components/tansition';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
transition();

