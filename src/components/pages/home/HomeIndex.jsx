import React from 'react'
import Navbar from '../../layouts/Navbar'
import Banner from './section/Banner'
import AboutMe from './section/AboutMe'
import Skills from './section/Skills'

const HomeIndex = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Skills/>
    </>
  )
}

export default HomeIndex