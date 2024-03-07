import React from 'react'
import styles from '../Footer/Footer.module.css'
import {FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <section className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.location}>
          <FaHome size={20} style ={{color:'white', marginRight: '2rem'}}/>
          <div>
            <p>London, E163HX</p>
          </div>
        </div>
        <div className={styles.phone}>
        <h4><FaPhone size={20} style ={{color:'white', marginRight: '2rem'}}/> 440xxxxxxx</h4>
        </div>
        <div className={styles.email}>
        <h4><FaMailBulk size={20} style ={{color:'white', marginRight: '2rem'}}/>kashfee.habib@gmail.com</h4>
        </div>
      </div>
      <div className={styles.right}>
        <h4>Find me on socials</h4>
        <div className={styles.socials}>
        <Link to ='https://www.linkedin.com/in/kashfee-habib-87252747/' target='_blank'><FaLinkedinIn size={30} style ={{color:'white', marginRight: '1rem'}}/></Link>
        <Link to ='https://github.com/KashfeeH' target='_blank'><FaGithub size={30} style ={{color:'white', marginRight: '1rem'}}/></Link>
        </div>
      </div>
      
    </div>
   </section>
  )
}

export default Footer