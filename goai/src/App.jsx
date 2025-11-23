import React, { useState, useEffect } from "react";
import Preloader from "./Components/Preloader";

import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Payment from "./Pages/Payment";  // <--- NORMAL IMPORT
  

// Layout Wrapper — hides header/footer on specific pages
function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/payment";

  return (
    <>
      {!hideHeaderFooter && <Header />}

      {children}

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

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
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Payment loads normally — header/footer hidden */}
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
