import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Payment from "./Pages/Payment";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <Header /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        {/* Add more routes here */}
      </Routes>
      <Footer /> {/* Always visible */}
    </BrowserRouter>
  );
}

export default App;
