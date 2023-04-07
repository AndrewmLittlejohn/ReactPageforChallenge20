import React from "react";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Navbar from "./components/navigation";
import Footer from "./components/footer";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Resume />
      <Portfolio />
      <Footer />

    </div>
  );
}

export default App;