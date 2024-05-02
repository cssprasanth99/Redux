import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import Gallery from "../Pages/Gallery";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};
