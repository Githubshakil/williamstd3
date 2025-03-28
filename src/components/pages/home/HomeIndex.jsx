import React from 'react'
import Navbar from '../../layouts/Navbar'
import Banner from './section/Banner'
import AboutMe from './section/AboutMe'
import Skills from './section/Skills'
import Portfolio from './section/Portfolio'
import Testimonial from './section/Testimonial'

const HomeIndex = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Testimonial/>
    </>
  )
}

export default HomeIndex