import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RoutesMain } from "./RoutesMain";

function App() {
  return (
    <BrowserRouter>
      <RoutesMain />
    </BrowserRouter>
  );
}

export default App;
