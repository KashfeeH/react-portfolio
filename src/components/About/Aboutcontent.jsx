import styles from '../About/Aboutcontent.module.css'
import React from 'react'
import skills from '../../data/skills.json'
import { getImageUrl } from "../../utils";

const Aboutcontent = () => {
  return (
  <section className={styles.about}>
      <div className={styles.left}>
        <h3> Learn more about me</h3>
        <a href='myresume.pdf' download="myresume.pdf">
        <button className={styles.btn}>Download resume</button>        
        </a>
      </div>
    <div className={styles.right}>
    <h3>Skills</h3>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      </section>
  )
}

export default Aboutcontent