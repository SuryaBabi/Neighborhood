import React from "react";
import ReactDOM from "react-dom";
import "./Style.css";
import App from "./Map/App";
import ServiceWorker from "./ServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ServiceWorker();
console.log(ServiceWorker());
