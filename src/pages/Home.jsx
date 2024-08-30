import React from 'react'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <>
    <Menu/>
    <Banner/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default Home