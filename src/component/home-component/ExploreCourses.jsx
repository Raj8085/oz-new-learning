// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Code,
//   Braces,
//   Brain,
//   Monitor,
//   ArrowRight, 
//   ChevronDown 
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const coursesData = [
//   {
//     id: 1,
//     title: 'Full Stack Web Development',
//     icon: Code,
//     description: 'Learn to build complete web applications using the MERN stack (MongoDB, Express, React, Node.js).',
//     duration: '6 months',
//     level: 'Intermediate',
//     price: '$499',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express']
//   },
//   {
//     id: 2,
//     title: 'Python Full Stack Development',
//     icon: Braces,
//     description: 'Become a full stack developer using Python, covering both frontend and backend technologies.',
//     duration: '6 months',
//     level: 'Intermediate',
//     price: '$549',
//     technologies: ['Python', 'Django', 'React', 'PostgreSQL']
//   },
//   {
//     id: 3,
//     title: 'DSA with C/C++',
//     icon: Brain,
//     description: 'Master Data Structures and Algorithms with hands-on C/C++ implementation and problem-solving.',
//     duration: '3 months',
//     level: 'Beginner to Intermediate',
//     price: '$299',
//     technologies: ['C', 'C++', 'Data Structures', 'Algorithms']
//   },
//   {
//     id: 4,
//     title: 'Frontend Development',
//     icon: Monitor,
//     description: 'Build responsive and interactive web interfaces using the latest frontend technologies and tools.',
//     duration: '4 months',
//     level: 'Beginner to Intermediate',
//     price: '$399',
//     technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
//   }
// ];


// const ExploreCourses = () => {
//   const [expandedCourse, setExpandedCourse] = useState(null);

//   const toggleCourseExpand = (courseId) => {
//     setExpandedCourse(expandedCourse === courseId ? null : courseId);
//   };

//   return (
//     <section className="py-16 px-5 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-900">
//       <div className="mx-auto px-4">
//         <motion.h2 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500 dark:text-blue-300"
//         >
//           Explore Our Courses
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
//           {coursesData.map((course) => (
//             <motion.div
//               key={course.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               // transition={{ duration: 0.1 }}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200"
//             >
//               <div className="p-6 flex flex-col justify-between h-full">
//                 <div>
//                 <div className="flex justify-between items-center mb-4">
//                   <course.icon 
//                     className="text-[#bf3900] dark:text-[#bf3900]" 
//                     size={40} 
//                   />
//                   <span className={`
//                     px-3 py-1 rounded-full text-sm font-semibold
//                     ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
//                       course.level === 'Intermediate' ? 'bg-blue-100 text-[#bf3900]' : 
//                       'bg-purple-100 text-[#bf3900]'}
//                   `}>
//                     {course.level}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
//                   {course.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {course.description}
//                 </p>

//                 <div className="flex justify-between items-center mb-4">
//                   <div className="text-gray-700 dark:text-gray-300">
//                     <strong>Duration:</strong> {course.duration}
//                   </div>
//                   {/* <div className="text-[#bf3900] dark:text-[#bf3900] font-bold">
//                     {course.price}
//                   </div> */}
//                 </div>

//                 </div>

//                 <div>
//                 <motion.button
//                   onClick={() => toggleCourseExpand(course.id)}
//                   className="w-full flex justify-between items-center bg-blue-50 dark:bg-[#bf3900] text-[#bf3900] dark:text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-100 dark:bg-[#bf3900] transition-colors"
//                 >
//                   <span>Technologies</span>
//                   <ChevronDown 
//                     size={20} 
//                     className={`transform transition-transform ${
//                       expandedCourse === course.id ? 'rotate-180' : ''
//                     }`} 
//                   />
//                 </motion.button>

//                 {expandedCourse === course.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     transition={{ duration: 0.3 }}
//                     className="mt-4 flex flex-wrap gap-2"
//                   >
//                     {course.technologies.map((tech) => (
//                       <span 
//                         key={tech}
//                         className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </motion.div>
//                 )}
//                  <Link to="/contact">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="mt-6 w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#bf3900] transition-colors"
//                 >
//                  <Link to="/contact">
//                  <span>Enroll Now</span>
//                  </Link>
            
//                   <ArrowRight size={20} />
//                 </motion.button>
//                 </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ExploreCourses;


import { useState, useEffect } from 'react';
import { 
  Code,
  Braces,
  Brain,
  Monitor,
  ArrowRight, 
  ChevronDown,
  Star,
  Clock,
  User,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

const coursesData = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    icon: Code,
    description: 'Learn to build complete web applications using the MERN stack (MongoDB, Express, React, Node.js).',
    duration: '6 months',
    level: 'Intermediate',
    price: '$499',
    rating: 4.8,
    students: 2345,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    highlights: [
      'Build real-world projects',
      'Industry relevant curriculum',
      'Live mentoring sessions'
    ]
  },
  {
    id: 2,
    title: 'Python Full Stack Development',
    icon: Braces,
    description: 'Become a full stack developer using Python, covering both frontend and backend technologies.',
    duration: '6 months',
    level: 'Intermediate',
    price: '$549',
    rating: 4.9,
    students: 1890,
    technologies: ['Python', 'Django', 'React', 'PostgreSQL'],
    highlights: [
      'Build 5+ complete applications',
      'Advanced database concepts',
      'Machine learning integration'
    ]
  },
  {
    id: 3,
    title: 'DSA with C/C++',
    icon: Brain,
    description: 'Master Data Structures and Algorithms with hands-on C/C++ implementation and problem-solving.',
    duration: '3 months',
    level: 'Beginner to Intermediate',
    price: '$299',
    rating: 4.7,
    students: 3120,
    technologies: ['C', 'C++', 'Data Structures', 'Algorithms'],
    highlights: [
      'Competitive programming prep',
      'Interview preparation',
      'Problem-solving techniques'
    ]
  },
  {
    id: 4,
    title: 'Frontend Development',
    icon: Monitor,
    description: 'Build responsive and interactive web interfaces using the latest frontend technologies and tools.',
    duration: '4 months',
    level: 'Beginner to Intermediate',
    price: '$399',
    rating: 4.6,
    students: 2780,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    highlights: [
      'Responsive design mastery',
      'Modern UI/UX principles',
      'Performance optimization'
    ]
  }
];

const ExploreCourses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('courses-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Staggered animations for courses
  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setVisibleCourses(coursesData.map(course => course.id));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting]);

  const toggleCourseExpand = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const filteredCourses = filter === 'all' 
    ? coursesData 
    : coursesData.filter(course => {
        if (filter === 'beginner') return course.level.includes('Beginner');
        if (filter === 'intermediate') return course.level.includes('Intermediate');
        return true;
      });

  const getLevelColor = (level) => {
    if (level.includes('Beginner') && level.includes('Intermediate')) 
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    if (level.includes('Beginner')) 
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  };

  return (
    <>
    <section 
      id="courses-section"
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          className={`transform transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500 dark:from-orange-400 dark:to-red-300">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Elevate your skills with our industry-leading courses designed by experts to help you succeed
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              All Courses
            </button>
            <button 
              onClick={() => setFilter('beginner')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'beginner' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Beginner
            </button>
            <button 
              onClick={() => setFilter('intermediate')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'intermediate' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Intermediate
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className={`transform transition-all duration-700 delay-${index * 100} ${
                visibleCourses.includes(course.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-6 flex flex-col justify-between h-full relative overflow-hidden">
                  {/* Price badge */}
                  {/* <div className="absolute -right-10 top-8 transform rotate-45 bg-gradient-to-r from-orange-600 to-red-500 text-white px-12 py-1 text-sm font-bold shadow-md">
                    {course.price}
                  </div> */}
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="bg-orange-50 dark:bg-gray-700 p-3 rounded-lg">
                        <course.icon 
                          className="text-orange-600 dark:text-orange-400" 
                          size={32} 
                        />
                      </div>
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}
                      `}>
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {course.description}
                    </p>

                    {/* Course stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Clock size={18} className="text-orange-600 dark:text-orange-400 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Duration</span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{course.duration}</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Star size={18} className="text-orange-600 dark:text-orange-400 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Rating</span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{course.rating}/5</span>
                      </div>
                      
                      <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <User size={18} className="text-orange-600 dark:text-orange-400 mb-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">Students</span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Course Highlights:</h4>
                      <ul className="space-y-1">
                        {course.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => toggleCourseExpand(course.id)}
                      className="w-full flex justify-between items-center bg-orange-50 dark:bg-gray-700 text-orange-700 dark:text-orange-300 px-4 py-3 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-600 transition-colors font-medium"
                    >
                      <span>Technologies Covered</span>
                      <ChevronDown 
                        size={20} 
                        className={`transform transition-transform duration-300 ${
                          expandedCourse === course.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {expandedCourse === course.id && (
                      <div
                        className="mt-4 flex flex-wrap gap-2 animate-fadeIn"
                      >
                        {course.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link to="/contact" className="block w-full">
                      <button
                        className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 text-white py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-[1.02] font-semibold shadow-md hover:shadow-lg"
                      >
                        <span>Enroll Now</span>
                        <ArrowRight size={20} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No courses message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No courses match your selected filter. Try another option.
            </p>
          </div>
        )}
      </div>

      {/* Add custom styling for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
    </>
  
  );
};

export default ExploreCourses;