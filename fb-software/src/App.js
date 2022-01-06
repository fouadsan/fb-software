import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, ErrorPage } from "./pages";
import { Loading, Navbar, ScrollArrow, Sidebar, Footer } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans", "Indie Flower"],
      },
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="page-100">
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <Sidebar showLinks={showLinks} />
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
