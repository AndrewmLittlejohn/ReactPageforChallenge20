import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
  return (
    <div className="container">
      <h1>My Resume</h1>
      <p>
        <a href="AndrewL_resume.pdf" download="Andrew_Littlejohn_Resume_April_2023.pdf">
          Click here to download my resume</a>
      </p>
    </div>
  );
};

export default Resume;