import React from 'react'
import { motion } from 'framer-motion'
import Form from './Form'
import ImageSlider from './ImageSlider'
import AnimatedWordCycle from '@/components/ui/animated-text-circle'

const Hero = () => {
  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='h-full w-full pt-12 md:pt-28 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden'
    >
      <div className='sm:px-32 inset-0 h-full w-full'>
        <div className='flex flex-col lg:flex-row gap-10 h-full w-full p-3 md:py-5'>
          {/* Left Content */}
          <motion.div 
            variants={textVariants}
            className='lg:w-[50%] xl:w-[60%] w-full h-full pt-10 text-center'
          >
            <motion.div 
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {/* <motion.h1 
                variants={textVariants}
                className='text-3xl md:text-4xl md:mt-10 font-bold text-white md:leading-[55px] tracking-tight'
              >
                Become a High-Paid <span className='text-black md:bg-white md:px-5 md:py-2 rounded-md'>Full Stack Developer</span><br />
                Non IT Background ?
              </motion.h1> */}
              <motion.h1 
                variants={textVariants}
                className='text-3xl md:text-4xl md:mt-10 text-center font-bold text-white md:leading-[55px] tracking-tight'
              >
                Become a High-Paid <span className='px-5 py-1 bg-white rounded-md'>
                <AnimatedWordCycle 
                words={[
                    "Developer",
                    "Designer",
                    "Programmer",
                    "Engineer",
                    "Coder",
                ]}
                interval={3000}
                className={"text-black "} 
            /> 
                </span>
                 <br />Non IT Background ?
              </motion.h1>
              
              <motion.h2 
                variants={textVariants}
                className='text-sm md:text-md text-semibold text-white mt-2 tracking-wide'
              >
                No Problem ! Start Your Java Journey Today !
              </motion.h2>
            </motion.div>

            {/* Image Slider with Animation */}
            <motion.div 
              variants={textVariants}
              id='hero-slider' 
              className='w-full h-full mt-6'
            > 
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10 
                }}
              >
                <ImageSlider/>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ 
             type: "spring", 
             stiffness: 100, 
             delay: 0.5 
           }} 
            // variants={textVariants}
            id='form' 
            className='h-auto w-full lg:w-[40%] flex-grow'
          >
              <Form />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero