// import { motion } from 'framer-motion';
// import { 
//   Award, 
//   Globe, 
//   Users, 
//   Clock, 
//   Star, 
//   Zap 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       icon: Award,
//       title: 'Industry-Certified Curriculum',
//       description: 'Courses designed by industry experts with cutting-edge, real-world skills.',
//       color: 'blue'
//     },
//     {
//       icon: Globe,
//       title: 'Global Learning Community',
//       description: 'Connect with students and professionals from around the world.',
//       color: 'green'
//     },
//     {
//       icon: Users,
//       title: 'Personalized Mentorship',
//       description: 'One-on-one guidance from experienced tech professionals.',
//       color: 'purple'
//     },
//     {
//       icon: Clock,
//       title: 'Flexible Learning',
//       description: 'Self-paced courses with 24/7 access to learning materials.',
//       color: 'orange'
//     },
//     {
//       icon: Star,
//       title: 'Career Support',
//       description: 'Job placement assistance and portfolio development.',
//       color: 'red'
//     },
//     {
//       icon: Zap,
//       title: 'Cutting-Edge Technology',
//       description: 'Learn the latest tools and technologies in the tech industry.',
//       color: 'indigo'
//     }
//   ];

//   return (
//     <section className="py-16 px-5 md:px-20 lg:px-40 bg-white dark:bg-gray-900">
//       <div className="mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent dark:text-white">
//             Why Choose Our Institute?
//           </h2>
//           <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             We're committed to providing an exceptional learning experience that transforms careers.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={reason.title}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.2 
//               }}
//             //   whileHover={{ 
//             //     scale: 1.05,
//             //     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
//             //   }}
//               className="bg-white dark:bg-[#bf3900] p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
//             >
//               <div className={`
//                 w-16 h-16 mb-4 rounded-full flex items-center justify-center 
//                 bg-bg-[#bf3900] dark:bg-bg-[#bf3900]
//               `}>
//                 <reason.icon 
//                   className={`text-${reason.color}-600 dark:text-${reason.color}-400`} 
//                   size={32} 
//                 />
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
//                 {reason.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 {reason.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//         <Link to="/contact">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="text-center mt-12"
//         >
//           <button className="
//             bg-gradient-to-r from-orange-600 to-red-500 text-white 
//             px-8 py-3 rounded-lg 
//             text-lg font-semibold 
//             hover:bg-[#bf3900] 
//             transition-colors 
//             shadow-lg hover:shadow-xl
//           ">
//             Explore Our Programs
//           </button>
//         </motion.div>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, Calendar, Book, CreditCard, Award } from 'lucide-react';
import { delay } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Benefits data with improved content and aligned with the brand color
  const benefits = [
    {
      icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 10+ years of experience",
      color: "from-amber-500 to-orange-600",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Small Class Sizes",
      description: "Personalized attention with maximum 15 students per batch",
      color: "from-amber-500 to-orange-600",
      delay: 150
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Flexible Schedule",
      description: "Weekend and evening batches available for working professionals",
      color: "from-amber-500 to-orange-600",
      delay: 300
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Industry-Certified Curriculum',
      description: 'Courses designed by industry experts with cutting-edge, real-world skills.',
      color: "from-amber-500 to-orange-600",
      delay: 300
    },
    //     {
//       icon: Star,
//       title: 'Career Support',
//       description: 'Job placement assistance and portfolio development.',
//       color: 'red'
//     },
    {
      icon: <Book className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Practical Curriculum",
      description: "Hands-on projects and real-world case studies in every course",
      color: "from-amber-500 to-orange-600",
      delay: 300
    },
    {
      icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Career Support',
      description: 'Job placement assistance and portfolio development.',
      color: "from-amber-500 to-orange-600",
      delay: 450
    }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#fceedb' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Our Institute</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a unique learning experience designed to help you succeed in the ever-evolving IT industry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-6"></div>
        </div>

        {/* Benefits Grid - Responsive for all devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:shadow-xl`}
              style={{ 
                transitionDelay: `${isVisible ? benefit.delay : 0}ms`,
                borderTop: '4px solid #f59e0b'
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="p-6 md:p-8">
                {/* Icon */}
                <div 
                  className={`inline-flex items-center justify-center p-3 md:p-4 rounded-full bg-gradient-to-br ${benefit.color} text-white mb-5 transition-all duration-300 ${
                    hovered === index ? 'scale-110' : ''
                  }`}
                >
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                
                {/* Animated underline */}
                <div 
                  className={`h-1 mt-4 bg-gradient-to-r ${benefit.color} rounded-full transition-all duration-500 ${
                    hovered === index ? 'w-full' : 'w-12'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: '600ms' }}>
          <Link
            to="/explore-course" 
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Our Courses
          </Link>
        </div>
      </div>
    </div>
  );
}