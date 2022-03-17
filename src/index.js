import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);
responsiveFontSizes(theme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
