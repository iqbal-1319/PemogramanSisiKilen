import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeContextProvider } from "./Context/ThemeContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        {/*  */}
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);