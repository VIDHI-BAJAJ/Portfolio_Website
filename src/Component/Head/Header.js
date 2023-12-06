import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.png";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='help'>
            <img src={logo} alt='' />
          </div>
          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
    
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#project'>Project</a>
              </li>
              <li>
                <a href='#education'>Education</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <button className="social">
              <li>
                <a href='https://www.linkedin.com/in/vidhi-bajaj1403/'>Contact</a>
              </li>
              </button>
              <button className="social">
                <li>
                <a href='https://github.com/VIDHI-BAJAJ'>Github</a>
              </li>
              </button>
              </ul>
               <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header