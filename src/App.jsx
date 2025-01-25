import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Menu from "./pages/Menu";
import Review from "./pages/Review";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Order from "./pages/Order";

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Review" element={<Review />} />
          <Route path="About" element={<About />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="Order" element={<Order />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  )   
}

export default App

