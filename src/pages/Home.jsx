import React from 'react'
import Hero from '../components/Home/Hero'
import Stats from '../components/Home/Stats'
import AboutUs from '../components/Home/AboutUs'
import Projects from '../components/Home/Projects'
import Achievements from '../components/Home/Achievements'
import News from '../components/Home/News'
import Contact from '../components/Home/Contact'
import Gallery from '../components/Home/Gallery'
import Stakeholders from '../components/Home/Stakeholders'
import Supporters from '../components/Home/Supporters'
import Map from '../components/common/Map'
import { UNIVERSITY_MAP_ADDRESS } from '../constants'
import useDocumentMeta from '../hooks/useDocumentMeta'

const Home = () => {
  useDocumentMeta()

  return (
    <>
      <Hero />
      <AboutUs />
      <Stats />
      <Projects />
      <Achievements />
      <News />
      <Stakeholders />
      <Supporters />
      <Gallery />
      <Contact />
      <Map src={UNIVERSITY_MAP_ADDRESS}/>
    </>
  )
}

export default Home