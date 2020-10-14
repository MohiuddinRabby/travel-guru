import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h4 className="text-info">
        Travel-guru is a practise app for traveling and booking hotels.
      </h4>
      <h5 className="text-danger">
        Designed and Developed by{" "}
        <a
          href="https://mohiuddin.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-info"
        >
          Mohiuddin
        </a>{" "}
        with:
      </h5>
      <ul className="text-danger">
        <li>React</li>
        <li>React-router</li>
        <li>React-bootstrap</li>
        <li>Firebase (for auth)</li>
        <li>Mapbox-GL (for google map)</li>
        <li>Local storage</li>
      </ul>
      <a
        href="https://github.com/MohiuddinRabby/travel-guru"
        target="_blank"
        rel="noopener noreferrer"
        className="text-info"
      >
        Visit the repo <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  );
};

export default About;
