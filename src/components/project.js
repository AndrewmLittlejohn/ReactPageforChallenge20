import React from 'react';

const Project = ({title, link, backgroundColor}) => {
  return (
    <section className="works" style={{backgroundColor}}>
    <p className="box"><a href={link}  target="_blank" rel="noopener noreferrer">{title}</a></p>
    </section>
  );
};

export default Project;
