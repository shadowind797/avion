import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./app";
import "./css/index.css";
import "./css/slider.css";

const appId = document.getElementById("app");
const app = ReactDOMClient.createRoot(appId);
app.render(<App />);
