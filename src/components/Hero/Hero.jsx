import styles from '../Hero/Hero.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../../assets/hero/kashfee.png'


const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am <span className={styles.span}>Kashfee</span></h1>
        <p className={styles.description}>I am a Front-End Developer based in London, with experience in React and NodeJs.
         Reach out to me if you want to learn more</p>
        <Link to = '/Contact' className={styles.btn}> Contact </Link>
      </div>
      <img src={hero} alt='an image of me'className={styles.heroImg}></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero