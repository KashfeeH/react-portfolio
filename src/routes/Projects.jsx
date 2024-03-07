import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/Secondherosection/HeroImg2'
import Projects_all from '../components/Projects/Projects_all'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 title ='Projects' subtitle ='View some of my recent projects'/>
      <Projects_all/>
      <Footer/>
    </div>
  )
}

export default Projects