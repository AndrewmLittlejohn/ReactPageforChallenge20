import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Navbar from "./components/NavBar";
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
        <Route path="/about" component={AboutMe} />
        <Route exact path="/" component={AboutMe} /> /* redundant so it loads on page load */
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Routes>
  </main>
    <Footer />

</div>
);
}

export default App;