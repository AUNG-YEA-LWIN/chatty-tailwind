import React from 'react'
import Analytics from '../components/Analytics'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
    </>
  )
}

export default Home