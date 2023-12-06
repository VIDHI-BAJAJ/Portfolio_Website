import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <div className="education_track">
    <h1>Education</h1>
    <p>My education has been a journey of self-discovery and growth. 
      My educational details are as follows.</p>
      <div className="place">
        <div className="university">
          <div className="university_lo">
            <div className="university_logo">
              <img src='https://www.collegebatch.com/static/clg-logo/avn-institute-of-engineering-technology-ranga-reddy-3092.jpg' class ="logo"/>
              <div class="university_name">
                <div class="Name">AVN Institue of Engineering and Technology, Ramdaspally, Telangana</div>
                <div class="branch">Bachelor of Technology - BTech, Computer Science and Engineering(Data Science)</div>
              <div class="year">Nov 2020 - Jun 2024</div></div></div> 
            <div class="university_info">
              <span class="info">I am currently pursuing a Bachelor's degree in Computer Science and Engineering (Data Science) from  AVN Institue of Engineering and Technology, Ramdaspally, Telangana .I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Machine learning, among others. 
             I am learning and working on exciting projects.</span></div>
          </div>
        </div>
        <div div className="college">
          <div div className="college_lo">
            <div className="college_logo">
              <img src = "https://pageacademy.com/wp-content/uploads/2022/03/PAGE-logo-22.png" class = "Clogo"/>
              <div className="college_name">
                <div className="Name">Page Junior College,Hyderabad</div>
                <div className="branch">MPC</div>
                <div className="year">2018-2020</div></div></div>
                <div class="college_info">
              <span class="info">I Completed By Intermediate From Page Junior College.</span></div>
          </div>
            </div>
          <div className="school">
          <div className="school_lo">
            <div className="school_logo">
              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScPlttfJgdU8rGCFcx1oI0xkygEeQg67a1Q&usqp=CAU" class = "logo"/>
              <div className="school_name">
                <div className="Name">St Joseph's Public School,Hyderabad</div>
                <div className="branch">10th</div>
                <div className="year">2018</div></div></div>
                <div class="college_info">
              <span class="info">I Completed By 10th Grade From St Joseph's Public School .</span></div>
          </div>
              </div>
            </div>
      </div>
  )
}

export default Education