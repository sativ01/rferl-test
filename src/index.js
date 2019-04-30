import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import MainApp from "./components/MainApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <CssBaseline />
    <MainApp />
  </>,
  rootElement
);
