import React, { useState } from 'react'
import styles from '../Navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
   const[click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
   
  return (
  <nav className= {styles.navbar}>
      <Link to='/'className={styles.title}>Kashfee Habib</Link>
    <div className={styles.menu}>
    <ul className={`${styles.list} ${click ? styles.active : ''}`}>
     
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
        <div className={styles.hamburgerMenu} onClick={handleClick}>
          {click ? (<FaTimes size={20} style ={{color:'white'}}/>): 
          (<FaBars size={20} style ={{color:'white'}}/>)
          }
        </div>
    </div>
  </nav>
  )
}

export default Navbar

