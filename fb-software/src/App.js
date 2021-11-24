import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, ErrorPage } from "./pages";
import { Navbar, ScrollArrow, Sidebar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ScrollArrow />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
