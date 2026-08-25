import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./assets/scss/main.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductProfile from "./pages/ProductProfile";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import WhatsAppIcn from "./components/WhatsAppIcn";
import Clients from "./pages/Clients";

// import SavitaMasale from "../savita-masale/App";
// import IdealCorporation from "../ideal-corporation/App";

function App() {
  const location = useLocation();

  function ScrollToTop() {
    const { pathname } = useLocation();
    // console.log(window);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  // landing page paths where TopBar & Footer should be hidden
  const hideLayoutRoutes = ["/savita-masale"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {/* Show TopBar only if NOT landing page */}
      {!shouldHideLayout && <TopBar />}

      <Routes>
        {/* main website routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-profile" element={<ProductProfile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />

        {/* landing page route */}
        {/* <Route path="/savita-masale" element={<SavitaMasale />} /> */}
        {/* <Route path="/ideal-corporation" element={<IdealCorporation />} /> */}
      </Routes>

      {!shouldHideLayout && <WhatsAppIcn />}

      {/* Show Footer only if NOT landing page */}
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
