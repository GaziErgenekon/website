import React from 'react'
import Hero from '../components/Home/Hero'
import Stats from '../components/Home/Stats'
import AboutUs from '../components/Home/AboutUs'
import Projects from '../components/Home/Projects'
import Achievements from '../components/Home/Achievements'
import Teams from '../components/Home/Teams'
import Contact from '../components/Home/Contact'
import Gallery from '../components/Home/Gallery'
import Stakeholders from '../components/Home/Stakeholders'
import Supporters from '../components/Home/Supporters'
import Map from '../components/common/Map'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Stats />
      <Projects />
      <Achievements />
      <Teams />
      <Stakeholders />
      <Supporters />
      <Gallery />
      <Contact />
      <Map />
    </>
  )
}

export default Home