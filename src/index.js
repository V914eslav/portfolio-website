import React from "react";
import ReactDOM from "react-dom/client";

import App from "./containers/App";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
