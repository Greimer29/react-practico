import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sidebar from './components/components';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import transition from './components/tansition'
ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
transition();

