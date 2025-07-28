import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Menu from "./pages/Menu";
import Review from "./pages/Review";
import NoPage from "./pages/NoPage";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter basename="/Ultah-Nayla">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  )   
}

export default App

