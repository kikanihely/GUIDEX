import React from 'react'
import Navbar from '../components/Navbar'
import LandPage from '../components/LandPage'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import FeaturedScholarship from '../components/FeaturedScholarship'
import Steps from '../components/Steps'

const Home = () => {

  return (
    <div className='h-[100vh]'>
      <Navbar />
      <LandPage />
      <Categories />
      <FeaturedScholarship />
      <Steps />
      <Footer />
    </div>


  )
}

export default Home
