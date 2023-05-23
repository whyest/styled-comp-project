import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Home
