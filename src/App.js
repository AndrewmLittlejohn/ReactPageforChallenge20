import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
<div className="d-flex flex-column min-vh-100">
  <header>
    <Navbar />
  </header>
   
  <main className="container flex-grow-1">
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route exact path="/" element={<AboutMe />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </main>

    <footer>
      <Footer />
    </footer>

</div>
);
}

export default App;