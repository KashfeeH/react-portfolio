import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/Secondherosection/HeroImg2'
import Aboutcontent from '../components/About/Aboutcontent'

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 title ='About' subtitle =' Transitioning from administration to specializing in front-end development'/>
    <Aboutcontent/>
    <Footer/>
    </div>
  )
}

export default About