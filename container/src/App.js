import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import MarketingApp from "./components/marketing-app";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
}
