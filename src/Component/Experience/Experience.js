import React from 'react';
import './Experience.css'

const Experience = () => {
  return (
    <div className="exp">
    <div className="experience_track">
      <h1>Experience</h1>
      <p>My work experience as a software engineer and working on different companies and projects.</p>
    </div>
    <div className="intern">
    <div className="in">
      <div className='company'>
            <div className="company_logo">
              <img src='https://www.codeclause.com/assets/img/Main%20Logo.png' class ="logo"/>
              <div class="company_name">
                <div class="Name">CodeClause</div>
                <div class="Intern">Web Development Intern</div>
              <div class="year">Apr 2023- Apr 2023</div></div></div> 
            <div class="company_info">
              <span class="info">During my web development internship at CodeClause from April 2023 to April 2023, I successfully created two basic frontend websites using HTML, CSS, and JavaScript.</span></div>
          </div>
        </div>
        <div className='company2'>
            <div className="company_logo">
              <img src="https://media.licdn.com/dms/image/D4D12AQEXxAxX8IM1Yg/article-cover_image-shrink_600_2000/0/1691129944924?e=2147483647&v=beta&t=38-xoS2fJvSyLkRlTbiaZA655cjfpaQWWDBAcTxoGQg"class ="logo"/>
              <div class="company_name">
                <div class="Name">Codsoft</div>
                <div class="Intern">Web Development Intern</div>
              <div class="year">Apr 2023- Sep 2023</div></div></div> 
            <div class="company_info">
              <span class="info">During my web development internship at Codsoft  from August 2023 to September 2023, I successfully created two basic frontend websites using HTML, CSS, and JavaScript.</span></div>
          </div>
        </div>
        </div>
        
    
  )
}

export default Experience