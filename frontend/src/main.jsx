import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import StoreContextProvider from "./context/StoreContext.jsx";
import ToastProvider from "./ToastProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </StoreContextProvider>
  </BrowserRouter>
);
