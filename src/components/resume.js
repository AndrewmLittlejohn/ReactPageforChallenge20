import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {

  const LineBreaks = 4;
  const whiteSpace = Array(LineBreaks).fill(null).map((_, index) => <br key={index} />);

  return (
    <div className="container">
      <h1>My Resume</h1>
      <p>
        <a href="./AndrewL_resume.pdf" target="_blank" rel="noopener noreferrer" download="Andrew_Littlejohn_Resume_April_2023.pdf">
          Download my resume</a> 
          {whiteSpace}
          As of challenge submittal the resume is still in the updating process, it is currently a minimum viable product, stress on minimum
      </p>
    </div>
  );
};

export default Resume;