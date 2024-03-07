import styles from '../../components/Secondherosection/HeroImg2.module.css'
import React, { Component } from 'react'

class HeroImg2 extends Component {
  render(){return (
    <section className={styles.heroImg2}>
      <div className={styles.title}>
        <h2>{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
      </div>
    </section>
  )};
  
}

export default HeroImg2