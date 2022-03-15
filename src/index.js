import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
