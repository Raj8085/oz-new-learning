import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Database, 
  Layout, 
  ArrowRight, 
  ChevronDown 
} from 'lucide-react';

const coursesData = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    icon: Code,
    description: 'Comprehensive course covering modern web technologies from frontend to backend.',
    duration: '6 months',
    level: 'Intermediate',
    price: '$499',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 2,
    title: 'Cybersecurity Essentials',
    icon: Shield,
    description: 'Learn ethical hacking, network security, and advanced protection strategies.',
    duration: '4 months',
    level: 'Advanced',
    price: '$599',
    technologies: ['Networking', 'Penetration Testing', 'Security Protocols']
  },
  {
    id: 3,
    title: 'Data Science & AI',
    icon: Database,
    description: 'Master data analysis, machine learning, and artificial intelligence techniques.',
    duration: '8 months',
    level: 'Expert',
    price: '$699',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn']
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    icon: Layout,
    description: 'Create stunning, user-friendly interfaces using the latest design principles.',
    duration: '3 months',
    level: 'Beginner',
    price: '$399',
    technologies: ['Figma', 'Adobe XD', 'Design Thinking']
  }
];

const ExploreCourses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourseExpand = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <section className="py-16 px-5 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-300"
        >
          Explore Our Courses
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                <div className="flex justify-between items-center mb-4">
                  <course.icon 
                    className="text-blue-600 dark:text-blue-400" 
                    size={40} 
                  />
                  <span className={`
                    px-3 py-1 rounded-full text-sm font-semibold
                    ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                      course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 
                      'bg-purple-100 text-purple-800'}
                  `}>
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-700 dark:text-gray-300">
                    <strong>Duration:</strong> {course.duration}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-bold">
                    {course.price}
                  </div>
                </div>

                </div>

                <div>
                <motion.button
                  onClick={() => toggleCourseExpand(course.id)}
                  className="w-full flex justify-between items-center bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                >
                  <span>Technologies</span>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform ${
                      expandedCourse === course.id ? 'rotate-180' : ''
                    }`} 
                  />
                </motion.button>

                {expandedCourse === course.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {course.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
                >
                  <span>Enroll Now</span>
                  <ArrowRight size={20} />
                </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;