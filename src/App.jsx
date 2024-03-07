import React from 'react'
import styles from './App.module.css'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
     <div className={styles.App}> 
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Projects' element={<Projects />} />
         <Route path='/About' element={<About />} />
         <Route path='/Contact' element={<Contact />} />
       </Routes>
     </div>
  );
 }
 
 export default App;