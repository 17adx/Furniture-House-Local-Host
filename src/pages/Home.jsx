import React from 'react';
import Navbar from '../components/navbar/navbar';
import HeroSection from '../components/Hero/herosection';
import Products from '../components/products/Products';
import AboutUs from '../components/AboutUs/aboutUs';
import Footer from '../components/Footer/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Products />
      <AboutUs />
      <Footer />
    </>
  )
}

export default Home