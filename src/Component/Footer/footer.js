import React from 'react'
import './footer.css';

const footer = () => {
  return (
      <div className="wrapper_footer">
        <h4>Vidhi Bajaj</h4>
        <div className="nav_link">
        <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        </ul>
      </div>
      <div className="copyright">
        Vidhi Bajaj. All rights reserved.
      </div>
      </div>
  )
}

export default footer