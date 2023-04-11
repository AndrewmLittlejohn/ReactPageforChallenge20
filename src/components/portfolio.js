import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './project';
import projectList from './projectlist';

const Portfolio = () => {
  return (
    <div className="container">
    <h1>Portfolio</h1>
    <div className="flexcontainer">
      <div className="portfolio-container">
        {projectList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          link={project.link}
          backgroundColor={project.backgroundColor} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
