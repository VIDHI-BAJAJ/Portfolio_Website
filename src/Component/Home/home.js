import React from 'react';
import "./home.css";
import banner from "../Images/banner.jpeg";
import { Button } from 'react-scroll';



const home = () => {
  return (
   <>
     <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h1>
              Hello, I'm <br/><span>Vidhi Bajaj</span>
            </h1>
            <p>I have substantial expertise in web development, having successfully contributed to numerous projects.
               Additionally, my skills extend to Business Analysis, where I am proficient in coding languages like Python, MySQL, and advanced Excel. 
              My experience also encompasses working with PowerBI</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={banner} alt='' />
            </div>
          </div>
        </div>
        <button className='btn'>
          <li>
          <a href='https://drive.google.com/file/d/1rFpvZ8Aa20obgjTsHUSz_3AsCdCcELZN/view'>Resume</a>
          </li>
          </button>
      </section>
     </>
  )
}

export default home