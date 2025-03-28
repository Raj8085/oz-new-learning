import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  TrendingUp, 
  Globe, 
  Unlock, 
  Codesandbox, 
  DollarSign 
} from 'lucide-react';

const WhyChooseITCareer = () => {
  const [activeImage, setActiveImage] = useState(null);

  const careerReasons = [
    {
      icon: DollarSign,
      title: 'Competitive Salaries',
      description: 'IT professionals consistently rank among the highest-paid workers across industries, with excellent compensation packages and growth potential.',
      color: 'green',
      image: 'https://wallpapercave.com/wp/wp3386769.jpg'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Technology transcends borders. IT careers offer remote work options, international projects, and the ability to work from anywhere in the world.',
      color: 'blue',
      image: 'https://wallpapercave.com/wp/wp3386769.jpg'
    },
    {
      icon: Briefcase,
      title: 'Diverse Career Paths',
      description: 'From web development to cybersecurity, cloud computing to AI, IT offers numerous specializations to match your unique interests and skills.',
      color: 'purple',
      image: 'https://wallpapercave.com/wp/wp3386769.jpg'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'The tech industry is constantly evolving, providing endless opportunities for learning, upskilling, and professional development.',
      color: 'orange',
      image: 'https://wallpapercave.com/wp/wp3386769.jpg'
    },
    {
      icon: Unlock,
      title: 'Problem-Solving Impact',
      description: 'IT professionals solve real-world challenges, creating innovative solutions that can transform businesses and improve people\'s lives.',
      color: 'indigo',
      image: 'https://wallpapercave.com/wp/wp3386769.jpg'
    },
    {
      icon: Codesandbox,
      title: 'Innovation & Creativity',
      description: 'Technology is a playground for creativity. Build cutting-edge applications, design revolutionary systems, and bring imaginative ideas to life.',
      color: 'red',
      image: 'https://wallpapercave.com/wp/wp3386769.jpg'
    }
  ];

  return (
    <section className="py-16 px-5 md:px-20 lg:px-40 bg-gray-50 dark:bg-gray-900">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose a Career in IT?
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the exciting world of technology and unlock a future filled with innovation, opportunity, and growth.
          </p>
        </motion.div>

        {/* Image Modal */}
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={activeImage}
              alt="Career in IT"
              className="max-w-4xl w-full max-h-[80vh] object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {careerReasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4">
                <motion.img
                  src={reason.image}
                  alt={reason.title}
                  onClick={() => setActiveImage(reason.image)}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                />
              </div>
              <div className={`
                w-16 h-16 mb-4 rounded-full flex items-center justify-center 
                bg-${reason.color}-100 dark:bg-${reason.color}-900
              `}>
                <reason.icon 
                  className={`text-${reason.color}-600 dark:text-${reason.color}-400`} 
                  size={32} 
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Start Your IT Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our comprehensive IT programs are designed to transform your passion into a successful career. From beginners to advanced professionals, we have the right path for you.
            </p>
            <button className="
              bg-blue-600 text-white 
              px-8 py-3 rounded-lg 
              text-lg font-semibold 
              hover:bg-blue-700 
              transition-colors 
              shadow-lg hover:shadow-xl
            ">
              Explore Career Paths
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseITCareer;