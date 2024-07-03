// src/Components/CVDownload.js
import React from 'react';
import './cv.css';

const CV = () => {
    return (
        <div id="cv-download">
            <h1>My Work Experience<span className="highlight"> and Education</span></h1>
            <p>My CV describes my work experience,skills and Education  </p>
            <a href={`${process.env.PUBLIC_URL}/CVs.pdf`} download="CVs.pdf" className="download-btn">Download CV</a>
        </div>
    );
};

export default CV;
