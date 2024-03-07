import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/Secondherosection/HeroImg2'
import Form from '../components/Contact/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 title ='Contact' subtitle ='Feel free to reach out to me'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact