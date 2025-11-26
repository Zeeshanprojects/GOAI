import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";
import Vision from "./Pages/Vision";
import Contact from "./Pages/Contact";
import Platform from "./Pages/Platform";
import Userdetails from "./Pages/userdetails";
import { FormProvider } from "./Components/FormContext";
import Checkout from "./Pages/Checkout";
import Carddetails from "./Pages/Carddetails";
import Membership from "./Pages/Membership";
import TermsandConditions from "./Pages/TermsandConditions";
import RefundPolicy from "./Pages/RefundPolicy";

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
    <FormProvider>
        <BrowserRouter>
        <ScrollToTop />
        <Header /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
       <Route path="/membership" element={<Membership/>}/>
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/platform" element={<Platform/>}/>
          <Route path="/userdetails" element={<Userdetails/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/carddetails" element={<Carddetails/>}/>
          <Route path="/termandcondition" element={<TermsandConditions/>}/>
          <Route path="/refundpolicy" element={<RefundPolicy/>}/>
        </Routes>
        <Footer /> {/* Always visible */}
      </BrowserRouter>
    </FormProvider>
    
    </>
  );
}

export default App;
