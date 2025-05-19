// import { motion } from 'framer-motion'
// import Form from './Form'
// import ImageSlider from './ImageSlider'
// import AnimatedWordCycle from '@/components/ui/animated-text-circle'

// const Hero = () => {
//   // Variants for text animation
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Variants for container animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <motion.div 
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className='h-full w-full pt-12 md:pt-28 bg-[#fceedb] overflow-hidden'
//     >
//       <div className='sm:px-32 inset-0 h-full w-full'>
//         <div className='flex flex-col lg:flex-row gap-10 h-full w-full p-3 md:py-5'>
//           {/* Left Content */}
//           <motion.div 
//             variants={textVariants}
//             className='lg:w-[50%] xl:w-[60%] w-full h-full pt-10 text-center'
//           >
//             <motion.div 
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {/* <motion.h1 
//                 variants={textVariants}
//                 className='text-3xl md:text-4xl md:mt-10 font-bold text-white md:leading-[55px] tracking-tight'
//               >
//                 Become a High-Paid <span className='text-black md:bg-white md:px-5 md:py-2 rounded-md'>Full Stack Developer</span><br />
//                 Non IT Background ?
//               </motion.h1> */}
//               <div className='hidden lg:block'>
//               <motion.h1 
//                 variants={textVariants}
//                 className='text-3xl md:text-4xl md:mt-10 text-center font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent md:leading-[55px] tracking-tight'
//               >
//                 Become a High-Paid <br className='md:hidden' /> <span className='px-5 py-1 bg-white rounded-md'>
//                 <AnimatedWordCycle 
//                 words={[
//                     "Developer",
//                     "Designer",
//                     "Programmer",
//                     "Engineer",
//                     "Coder",
//                 ]}
//                 interval={3000}
//                   className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-orange-500 hover:to-red-400 bg-clip-text text-transparent"
//             /> 
//                 </span>
//                  <br className='hidden md:block' />Non IT Background ?
//               </motion.h1>
//               </div>
              
//               <div className='lg:hidden'>
//               <motion.h1 
//                 variants={textVariants}
//                 className='text-3xl md:text-4xl md:mt-10 text-center font-bold bg-gradient-to-r from-blue-600 to-red-500 hover:from-orange-500 hover:to-red-400 bg-clip-text text-transparent md:leading-[55px] tracking-tight'
//               >
//                 Become a High-Paid Full Stack Developer Non IT Background ?
//               </motion.h1>
//               </div>
              
//               <motion.h2 
//                 variants={textVariants}
//                 className='text-2xl md:text-md text-semibold text-black mt-6 tracking-wide'
//               >
//                 No Problem ! Start Your Journey Today !
//               </motion.h2>
//             </motion.div>

//             {/* Image Slider with Animation */}
//             <motion.div 
//               variants={textVariants}
//               id='hero-slider' 
//               className='w-full h-full mt-6'
//             > 
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ 
//                   type: "spring", 
//                   stiffness: 100, 
//                   damping: 10 
//                 }}
//               >
//                 <ImageSlider/>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Form Section */}
//           <motion.div
//            initial={{ opacity: 0, x: 50 }}
//            animate={{ opacity: 1, x: 0 }}
//            transition={{ 
//              type: "spring", 
//              stiffness: 100, 
//              delay: 0.5 
//            }} 
//             // variants={textVariants}
//             id='form' 
//             className='h-auto w-full lg:w-[40%] flex-grow'
//           >
//               <Form />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
// export default Hero


// import { Button } from "@/components/ui/button"

// export default function Home() {
//   return (
//     <main className="min-h-screen md:mt-44">
//       <div className="container mx-auto px-20 py-12 md:py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Content */}
//           <div className="space-y-6">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2d5a] leading-tight">
//               Central India&apos;s
//               <br />
//               Leading{" "}
//               <span className="text-[#d84727]">
//                 IT Training
//                 <br />
//                 Hub
//               </span>{" "}
//               {/* Institute */}
//             </h1>
//             <p className="text-gray-700 text-lg max-w-lg">
//               Looking for the best IT training institute in Indore? At Oz Leaning, we offer a diverse range of
//               programming courses designed to elevate your tech skills. Our curriculum includes data analytics courses,
//               Java, Python, and more, all taught by industry experts.
//             </p>
//             <Button className="rounded-full px-8 py-6 text-lg font-medium bg-gradient-to-r from-orange-600 to-red-500 hover:bg-[#c13e22] text-white">
//               Book Free Demo Session
//             </Button>
//           </div>

//           {/* Right Content */}

//           <div className="relative flex justify-center md:justify-end">
//             <div className="relative">
//               {/* Red Circle Background */}
//               <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-orange-600 to-red-500 relative">
//                 {/* Student Image */}
//                 <div className="absolute inset-0">
//                   <img
//                     src="/Empowering-Tomorrows-Leaders-2.png"
//                     alt="Student with laptop"
//                     width={500}
//                     height={500}
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* C# Logo */}
//                 <div className="absolute -top-4 -right-4 md:top-0 md:right-0 w-16 h-16 md:w-20 md:h-20">
//                   <div className="bg-gradient-to-r from-orange-600 to-red-500 p-2 rounded-lg transform rotate-12">
//                     <svg viewBox="0 0 128 128" className="w-full h-full">
//                       <path
//                         fill="#fff"
//                         d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6z"
//                       ></path>
//                       <path
//                         fill="#d84727"
//                         d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"
//                       ></path>
//                       <path
//                         fill="#d84727"
//                         d="M59.9 61.9c0-4.6 1.2-9.2 3.4-13.1l-26.6-15.4v40.6l26.4-15.3c-2-3.9-3.2-8.4-3.2-13 0 4.6 1.2 9 3.3 12.9l-26.5 15.3v-40.5l26.6 15.4c-2.1 3.9-3.4 8.4-3.4 13.1"
//                       ></path>
//                       <path
//                         fill="#fff"
//                         d="M59.9 61.9c0-4.6 1.2-9.2 3.4-13.1l-26.6-15.4v40.6l26.4-15.3c-2-3.9-3.2-8.4-3.2-13 0 4.6 1.2 9 3.3 12.9l-26.5 15.3v-40.5l26.6 15.4c-2.1 3.9-3.4 8.4-3.4 13.1m0 0"
//                       ></path>
//                       <path
//                         fill="#d84727"
//                         d="M74.3 48.8c-14.4 0-26.1 11.7-26.1 26.1s11.7 26.1 26.1 26.1 26.1-11.7 26.1-26.1-11.7-26.1-26.1-26.1zm0 40.7c-8.1 0-14.6-6.5-14.6-14.6s6.5-14.6 14.6-14.6 14.6 6.5 14.6 14.6-6.5 14.6-14.6 14.6z"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>

//                 {/* JS Logo */}
//                 <div className="absolute top-16 -right-4 md:top-24 md:right-0 w-14 h-14 md:w-16 md:h-16">
//                   <div className="bg-white p-1 rounded-lg transform -rotate-12">
//                     <svg viewBox="0 0 128 128" className="w-full h-full">
//                       <path
//                         fill="#d84727"
//                         d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }



import { motion } from 'framer-motion'
import Form from './Form'
import ImageSlider from './ImageSlider'
import AnimatedWordCycle from '@/components/ui/animated-text-circle'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
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
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  // Floating animation for elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  // Glowing animation for buttons or highlights
  const glowVariants = {
    initial: { boxShadow: "0 0 0 rgba(255, 140, 0, 0)" },
    animate: { 
      boxShadow: ["0 0 5px rgba(255, 140, 0, 0.2)", "0 0 20px rgba(255, 140, 0, 0.6)", "0 0 5px rgba(255, 140, 0, 0.2)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative h-full w-full pt-12 md:pt-20 overflow-hidden"
      style={{ 
        background: "#fceedb",
        backgroundImage: "radial-gradient(circle at top right, rgba(255, 180, 120, 0.15), transparent 70%), radial-gradient(circle at bottom left, rgba(255, 120, 100, 0.1), transparent 60%)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 opacity-30"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-gradient-to-tr from-red-200 to-orange-100 opacity-20"
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.95, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
  <div className="flex flex-col lg:flex-row items-center gap-10 h-full w-full py-4 md:py-8">
    {/* Left Content */}
    <motion.div 
      variants={textVariants}
      className="lg:w-1/2 xl:w-3/5 w-full h-full pt-4 md:pt-10 text-center lg:text-left order-1 lg:order-1"
    >
      <motion.div 
        variants={textVariants}
        className="space-y-6"
      >
        <motion.h1 
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        >
          <span className="inline-block mb-2 sm:mb-4">Become a High-Paid</span>
          <br className="hidden sm:block" />
          <motion.div 
            className="inline-block px-4 py-2 bg-white rounded-lg shadow-md"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            {/* Increased height to accommodate full text */}
            <div className="min-h-12 sm:min-h-16 ">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent">
                <AnimatedWordCycle 
                  words={[
                    "Developer",
                    "Designer",
                    "Programmer",
                    "Engineer",
                    "Coder",
                  ]}
                  interval={2500}
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent font-bold py-4"
                />
              </span>
            </div>
          </motion.div>
          <br className="block" />
          <motion.span 
            animate={floatingAnimation}
            className="inline-block mt-2 py-4 sm:mt-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            Non-IT Background?
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          variants={textVariants}
          className="text-xl md:text-2xl font-medium text-orange-800 tracking-wide"
        >
          No Problem! <span className="inline-block font-bold">Start Your Journey Today!</span>
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          variants={textVariants}
          className="pt-4 pb-8"
        >
          <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg transform transition-all duration-300"
          >
            Get Started
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Slider with Animation */}
      <motion.div 
        variants={textVariants}
        id="hero-slider" 
        className="w-full h-full mt-2 sm:mt-6 overflow-hidden"
      > 
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10 
          }}
          className="rounded-xl shadow-xl overflow-hidden"
        >
          <ImageSlider/>
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Form Section */}
    <motion.div
      variants={textVariants}
      id="form" 
      className="lg:w-1/2 xl:w-2/5 w-full order-1 lg:order-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        delay: 0.3 
      }}
    >
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl"
        whileHover={{ boxShadow: "0 20px 30px rgba(249, 115, 22, 0.15)" }}
        transition={{ duration: 0.3 }}
      >
        <Form />
      </motion.div>
    </motion.div>
  </div>
</div>

      {/* <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 h-full w-full py-4 md:py-8">
          <motion.div 
            variants={textVariants}
            className="lg:w-1/2 xl:w-3/5 w-full h-full pt-4 md:pt-10 text-center lg:text-left order-1 lg:order-1"
          >
            <motion.div 
              variants={textVariants}
              className="space-y-6"
            >
              <motion.h1 
                variants={textVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              >
                <span className="inline-block mb-2 sm:mb-4">Become a High-Paid</span>
                <br className="hidden sm:block" />
                <motion.span 
                  className="inline-block px-4 py-2 bg-white rounded-lg shadow-md"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                >
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent">
                    <AnimatedWordCycle 
                      words={[
                        "Developer",
                        "Designer",
                        "Programmer",
                        "Engineer",
                        "Coder",
                      ]}
                      interval={2500}
                      className="bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent font-bold"
                    />
                  </span>
                </motion.span>
                <br className="block" />
                <motion.span 
                  animate={floatingAnimation}
                  className="inline-block mt-2 sm:mt-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                >
                  Non-IT Background?
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                variants={textVariants}
                className="text-xl md:text-2xl font-medium text-orange-800 tracking-wide"
              >
                No Problem! <span className="inline-block font-bold">Start Your Journey Today!</span>
              </motion.h2>

              <motion.div
                variants={textVariants}
                className="pt-4 pb-8"
              >
                <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg transform transition-all duration-300"
                >
                  Get Started
                </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={textVariants}
              id="hero-slider" 
              className="w-full h-full mt-2 sm:mt-6 overflow-hidden"
            > 
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10 
                }}
                className="rounded-xl shadow-xl overflow-hidden"
              >
                <ImageSlider/>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={textVariants}
            id="form" 
            className="lg:w-1/2 xl:w-2/5 w-full order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.3 
            }}
          >
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-xl"
              whileHover={{ boxShadow: "0 20px 30px rgba(249, 115, 22, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <Form />
            </motion.div>
          </motion.div>
        </div>
      </div> */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-10 sm:h-16" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.73,118.92,150.72,121.94,321.39,56.44Z" 
            className="fill-white opacity-20">
          </path>
        </svg>
      </div>
    </motion.div>
  )
}

export default Hero 