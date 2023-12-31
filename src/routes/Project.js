import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/Heroimg2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="some of my most recent works."/>
      <Work />
      <Footer/>
    </div>
  )
}

export default Project