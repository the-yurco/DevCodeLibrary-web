import { useState } from "react";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./setup/router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
