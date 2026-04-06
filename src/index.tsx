import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeContext, defaultTheme } from "hooks/useTheme";

import App from "./app";
import "./index.css";

const container = document.querySelector("#root");

if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={defaultTheme}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
);
