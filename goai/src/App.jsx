import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import ScrollToTop from "./Components/ScrollToTop";
import Vision from "./Pages/Vision";
import Contact from "./Pages/Contact";
import Platform from "./Pages/Platform";
import Userdetails from "./Pages/userdetails";

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
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/platform" element={<Platform/>}/>
          <Route path="/userdetails" element={<Userdetails/>}/>
        </Routes>
        <Footer /> {/* Always visible */}
      </BrowserRouter>
    </>
  );
}

export default App;
