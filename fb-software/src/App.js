import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, ErrorPage } from "./pages";
import { Navbar, ScrollArrow, Sidebar, Footer } from "./components";

function App() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <Router>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <Sidebar />
      <ScrollArrow />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage setShowLinks={setShowLinks} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
