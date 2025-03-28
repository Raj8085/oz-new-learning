import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  Users, 
  Clock, 
  Star, 
  Zap 
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Industry-Certified Curriculum',
      description: 'Courses designed by industry experts with cutting-edge, real-world skills.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Global Learning Community',
      description: 'Connect with students and professionals from around the world.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Personalized Mentorship',
      description: 'One-on-one guidance from experienced tech professionals.',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Self-paced courses with 24/7 access to learning materials.',
      color: 'orange'
    },
    {
      icon: Star,
      title: 'Career Support',
      description: 'Job placement assistance and portfolio development.',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Learn the latest tools and technologies in the tech industry.',
      color: 'indigo'
    }
  ];

  return (
    <section className="py-16 px-5 md:px-20 lg:px-40 bg-white dark:bg-gray-900">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Our Institute?
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to providing an exceptional learning experience that transforms careers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
            //   whileHover={{ 
            //     scale: 1.05,
            //     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
            //   }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
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
          <button className="
            bg-blue-600 text-white 
            px-8 py-3 rounded-lg 
            text-lg font-semibold 
            hover:bg-blue-700 
            transition-colors 
            shadow-lg hover:shadow-xl
          ">
            Explore Our Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;