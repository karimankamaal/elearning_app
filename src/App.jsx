import { useState } from 'react'
import style from './style'
import {Navbar, Hero, Welcome} from './components'
function App() {
 

  return (
    <div className="bg-white w-full overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={` ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={` ${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Welcome/>
        </div>
      </div>
    </div>
     
    
  )
}

export default App
