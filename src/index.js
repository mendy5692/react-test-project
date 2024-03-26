import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import reportWebVitals from "./reportWebVitals";
import MyRouter from "./router/router.js";
import LoadingProvider from "./contexts/loadingContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <MyRouter />
    </LoadingProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// If you want to start measuring performance in your app, pass a function
// If you want to start measuring performance in your app, pass a function
// If you want to start measuring performance in your app, pass a function
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
