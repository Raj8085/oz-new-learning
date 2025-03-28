// import Hero from '@/component/Home'
import WhyChooseITCareer from '@/component/home-component/ChooseIT'
import ExploreCourses from '@/component/home-component/ExploreCourses'
import Hero from '@/component/home-component/Hero'
import ImageCarousel from '@/component/home-component/ImageCarousel'
import WhyChooseUs from '@/component/home-component/WhyChooseUs'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageCarousel />
      <ExploreCourses />
      <WhyChooseUs />
      <WhyChooseITCareer />
      <Footer />
      {/* <Navbar /> */}
    </div>
  )
}

export default Home