import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
          <Routes>
          <Route path="" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  )   
}

export default App

