import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Explore from "./pages/Explore";
import Favourites from "./pages/Favourites";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
};

export default App;
