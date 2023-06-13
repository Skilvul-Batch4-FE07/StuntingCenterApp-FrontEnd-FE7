import React from "react"
import Navbar from "../components/Navbar"
import HeroBanner from "../components/landingpage/HeroBanner"
import About from "../components/landingpage/About"
import Article from "../components/landingpage/Article"
import Forum from "../components/landingpage/Forum"
import Footer from "../components/landingpage/Footer"
import NavbarPage from "../components/landingpage/NavbarPage"
import NavbarPage from "../components/landingpage/NavbarPage"
const HomePage = () => {
  return (
    <>
      <NavbarPage/>
      <Navbar />
      <HeroBanner />
      <About />
      <Article />
      <Forum />
      <Footer/>
    </>
  )
}

export default HomePage