import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pier from "./images/freestock_18436897.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <h3>About Me</h3>
      <img id="aboutMePic" src={pier} alt="pier" />
      
      <h5 id="blurb">
      I am new to the world of coding and development, I look forwarding to learning more and continuing to aquire new skills as I travel down this road.
    My unique point of view having worked for years on the business, in a roling supporting both clients and technical architects, full agile teams,
    and a wide variety of different types of help desks, more and less technical, should help me in facilitating strong communication and understanding
    amongst everyone involved in the development proces. This strong communication will help in creating as needed, and understanding themes, epics,user stories, and the 
    individual tasks invovled in successfully working with an agile mindset. Should it be needed I also have experience will waterfall based initiatives and can work within
    these paremeters as well.  
      </h5>
   
    </div>
  );
};

export default AboutMe;