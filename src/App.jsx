import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Layout/Pages/Home";
import AboutUs from "./Layout/Pages/AboutUs";
import Blog from "./Layout/Pages/Blog";
import Services from "./Layout/Pages/Service";

import Careers from "./Layout/Pages/Careers";
import Contact from "./Layout/Pages/Contact";
import Portfolio from "./Layout/Portfolio";


const App = () => {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
    </>
  );
};

export default App;
