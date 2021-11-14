import React from "react";
import HomePage from "./Home";

import { Navbar, Sidebar } from "./components";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
