import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Section1 from './component/Section1'
import Section2 from './component/Section2'

function App() {
  

  return (
    <div>
      <Navbar/>
      <br/>
      <div className='section'>
      <Section2/>
      <Section1/>
      </div>
    </div>
  )
}

export default App
