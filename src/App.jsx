import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Message from "./pages/Message";
import Notes from "./pages/Notes";
import NoPage from "./pages/NoPage";
import Love from "./pages/Love";
import Friendship from "./pages/Friendship";

const App = () => {
  return (
    <BrowserRouter basename="/Ultah-Nayla">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Love" element={<Love />} />
          <Route path="/Friendship" element={<Friendship />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  )   
}

export default App

