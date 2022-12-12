import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MaincategoryProvider } from "./context/MaincategoryContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MaincategoryProvider>
      <App />
    </MaincategoryProvider>
  </React.StrictMode>
);
