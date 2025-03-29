import Navbar from '@/components/layout/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Courses = () => {
  // Sample course data - replace with your actual courses
  const coursesList = [
    { id: 1, name: "Web Development", icon: "🌐" },
    { id: 2, name: "Mobile App Development", icon: "📱" },
    { id: 3, name: "Data Science", icon: "📊" },
    { id: 4, name: "UX/UI Design", icon: "🎨" },
    { id: 5, name: "Cloud Computing", icon: "☁️" },
    { id: 6, name: "Artificial Intelligence", icon: "🤖" },
    { id: 7, name: "Cybersecurity", icon: "🔒" },
    { id: 8, name: "Blockchain Development", icon: "⛓️" }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Mobile View Container */}
      <div className="md:hidden"> {/* Only show on mobile (hidden on medium screens and above) */}
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Our Courses</h1>
          
          <div className="flex flex-col gap-3">
            {coursesList.map(course => (
              <Link 
                key={course.id} 
                to="/form" 
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  {/* <span className="text-2xl">{course.icon}</span> */}
                  <span className="font-medium">{course.name}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
            ))}
          </div>
          
          <div className="mt-8 px-4">
            <p className="text-center text-gray-600">
              Select a course to enroll and start your learning journey
            </p>
          </div>
        </div>
      </div>
      
      {/* Placeholder for desktop view - this won't be visible on mobile */}
      <div className="hidden md:block">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Courses</h1>
        </div>
        <div className="h-screen flex items-center justify-center">
          <p className="text-2xl">Explore our wide range of courses!</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;