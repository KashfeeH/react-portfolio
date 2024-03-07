import styles from '../Contact/Form.module.css'
import React from 'react'


const Form = () => {
  return (
  <section className={styles.form}>
      <form>
        <label>Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea rows= '6' placeholder='Type your message'/>
        <a href="mailto:myemail@email.com" className={styles.btn}>
        <span className={styles.text}>Submit</span>
        </a>
      </form>
      
  </section>
  )
}

export default Form