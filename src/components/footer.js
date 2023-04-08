import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="container footerClass">
       <footer className="py-3 mt-auto">
      <div className="container">
        <h3 id="Contactme">Contact me</h3>
<ul className="list-inline">
    <li className="list-inline-item"><a href="mailto:andrewmlittlejohn@gmail.com">Email</a></li>
    <li className="list-inline-item"><a href="8045432675">Call</a></li>
    <li className="list-inline-item"><a href="https://github.com/AndrewmLittlejohn?tab=repositories">Github</a></li>
    <li className="list-inline-item"><a href="https://www.linkedin.com/in/andrew-littlejohn-ba4a5821">LinkedIn</a></li>
</ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;