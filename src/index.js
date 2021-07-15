import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather.jsx";
import reportWebVitals from "./reportWebVitals";
import "./Card.css";

ReactDOM.render(<Weather />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
