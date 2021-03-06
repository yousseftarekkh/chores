import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@material-ui/core";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apollo.config";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: lightBlue,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <App />
        <ToastContainer />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
