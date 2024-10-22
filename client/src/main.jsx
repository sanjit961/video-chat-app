// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Make sure this file exists and is properly styled
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ContextProvider } from "./ScoketContext"; // Ensure the path is correct

// Polyfill the global object if needed
if (typeof global === "undefined") {
  window.global = window; // Polyfill the global object
}

// Create a Material UI theme (you can customize it further if needed)
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Optional but good for catching potential issues */}
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
