import WhyChooseITCareer from '@/component/home-component/ChooseIT'
import ServicesPage from '@/component/service-component/Services'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Service = () => {
  return (
    <div>
        <Navbar />
        <ServicesPage/>
        <WhyChooseITCareer />
        <Footer />
    </div>
  )
}

export default Service