import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";

const theme = {
  colors: {
    primary: "#20C5D2",
    secondary: "#6356A5",
    textPrimary: "black",
    textSecondary: "white",
    btnDisabled: "#CFCFD5",
    backgroundColor: '#F5F6F9'
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: ".8em",
    medium: "2em",
    large: "3em"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;