import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
