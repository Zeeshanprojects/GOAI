import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "./Components/Preloader";

import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

// Lazy Load Payment Page
const Payment = lazy(() => import("./Pages/Payment"));

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
              
              {/* Lazy Load Payment */}
              <Route
                path="/payment"
                element={
                  <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
                    <Payment />
                  </Suspense>
                }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
