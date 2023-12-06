import React from 'react'
import Header from './Component/Head/Header';
import "./App.css"
import Home  from './Component/Home/home';
import Skill from './Component/Skill/skill';
import Projects from './Component/Projects/Projects';
import Education from './Component/Education/Education';
import Experience from './Component/Experience/Experience';
import Footer from './Component/Footer/footer';
const App = () => {
  return (
    <>
    <Header/>
    <Home />
    <Skill />
    <Projects/>
    <Education />
    <Experience/>
    <Footer/>
   </>
  )
}

export default App