import React from 'react'
import style from '../style'
import {Navbar, Hero, Welcome, Instructors,PopularCourses} from '../components'

const Homepage = () => {
    return (
        <div className="bg-white w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth}`}>
            <Navbar activeTitle="Home"/>
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
            <Instructors/>
            <PopularCourses/>
            </div>
          </div>
        </div>
    )
}

export default Homepage
