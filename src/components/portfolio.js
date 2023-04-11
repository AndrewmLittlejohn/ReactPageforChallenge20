import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  return (
    <div className="container">
      <h1>Portfolio</h1>

<div className="flexcontainer">
<div className="portfolio-container">
  <section className="works" id="one" style={{backgroundColor: "#1abc9c"}}>
  <p className="box"><a href="https://andrewmlittlejohn.github.io/Mini-Projects-at-UR/" target="_blank" rel="noopener noreferrer">Current Work</a> </p>
  </section>

  <section className="works" style={{backgroundColor: "#16a085"}}>
  <p className="box"><a href="https://andrewmlittlejohn.github.io/22.11.10-Accessibilty-Challenge-/" target="_blank" rel="noopener noreferrer">Challenge 1</a></p>
  </section>
  <section className="works" style={{backgroundColor: "#2ecc71"}}>
  <p className="box"><a href="https://rjclemmer.github.io/Big_Job_Search/" target="_blank" rel="noopener noreferrer">Third Party APIs</a></p>
  </section>
  <section className="works" style={{backgroundColor: "#27ae60"}}>
   <p className="box"><a href="https://house-recipes.herokuapp.com/" target="_blank" rel="noopener noreferrer">Team Challenge 2</a></p>
  </section>

  <section className="works" style={{backgroundColor: "#f1c40f"}}>
    <p className="box"><a href="https://andrewmlittlejohn.github.io/22.11.28-PWord-Challenge/" target="_blank" rel="noopener noreferrer">Password Challenge</a></p></section>
    
    <section className="works" style={{backgroundColor: "#f1c40f"}}>
    <p className="box"><a href=" https://andrewmlittlejohn.github.io/Weather-Api-Challenge/ " target="_blank" rel="noopener noreferrer">Weather API Challenge</a></p></section>
 


</div>



      </div>
    </div>
  );
};

export default Portfolio;