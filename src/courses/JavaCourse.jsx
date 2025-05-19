import { useState } from "react"
import {
  Code,
  Lightbulb,
  Users,
  Award,
  Calendar,
  BookOpen,
  Layers,
  Monitor,
  FileCode,
  Database,
  ChevronDown,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function JavaCoursePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center md:mt-20">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Java Development</h1>
              <p className="text-xl mb-6">
                Master the art of building robust, scalable applications with Java, one of the world's most popular
                programming languages
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Core Java</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Spring Boot</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Hibernate</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">RESTful APIs</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Microservices</span>
              </div>
              <div className="flex gap-4">
              <Link to="/contact">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-all">
                  Enroll Now
                </button>
                </Link>
                <Link to="/contact">
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-bold transition-all">
                  Download Syllabus
                </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-800 rounded-full flex items-center justify-center">
                  <Monitor size={120} strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <FileCode size={36} strokeWidth={1} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <Layers size={36} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Calendar className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Duration</h3>
            </div>
            <p className="text-gray-700">16 weeks (4 months)</p>
            <p className="text-gray-700">5 hours per week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Prerequisites</h3>
            </div>
            <p className="text-gray-700">Basic computer skills</p>
            <p className="text-gray-700">No prior Java experience required</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Award className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Certification</h3>
            </div>
            <p className="text-gray-700">Industry-recognized certificate</p>
            <p className="text-gray-700">Project portfolio</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex overflow-x-auto space-x-4 pb-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "overview" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "curriculum" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "projects" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Projects
          </button>
          {/* <button
            onClick={() => setActiveTab("instructors")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "instructors" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Instructors
          </button> */}
          <button
            onClick={() => setActiveTab("careers")}
            className={`px-4 py-2 font-medium rounded-lg whitespace-nowrap ${
              activeTab === "careers" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Career Paths
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-4">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-6">
                Our Java Development course is designed to transform beginners into job-ready Java developers. You'll
                learn to build robust, scalable applications using Java and its powerful ecosystem of frameworks and
                tools.
              </p>

              <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Code size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Core Java</h4>
                    <p className="text-gray-700">Master Java fundamentals, OOP concepts, and advanced features</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Code size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Spring Framework</h4>
                    <p className="text-gray-700">Build enterprise applications with Spring Boot and Spring MVC</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Code size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Database Integration</h4>
                    <p className="text-gray-700">Work with JDBC, JPA, and Hibernate for data persistence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Code size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">RESTful APIs</h4>
                    <p className="text-gray-700">Design and implement scalable web services</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Course Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Hands-on Learning</h4>
                  </div>
                  <p className="text-gray-700">70% practical exercises and real-world projects</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Live Sessions</h4>
                  </div>
                  <p className="text-gray-700">Interactive classes with industry experts</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Portfolio Building</h4>
                  </div>
                  <p className="text-gray-700">Create professional projects for your portfolio</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 1: Java Fundamentals</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 1-2: Java Basics</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Java syntax and structure</li>
                      <li>Variables, data types, and operators</li>
                      <li>Control flow statements</li>
                      <li>Arrays and collections</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 3-4: Object-Oriented Programming</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Classes and objects</li>
                      <li>Inheritance and polymorphism</li>
                      <li>Interfaces and abstract classes</li>
                      <li>Exception handling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 2: Advanced Java</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 5-6: Java Standard Libraries</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Java Collections Framework</li>
                      <li>Generics and Lambda expressions</li>
                      <li>Stream API</li>
                      <li>File I/O and NIO</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 7-8: Multithreading and Concurrency</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Thread creation and lifecycle</li>
                      <li>Synchronization and locks</li>
                      <li>Concurrent collections</li>
                      <li>Executor framework</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 3: Java Frameworks</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 9-12: Spring Framework</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Spring Core and Dependency Injection</li>
                      <li>Spring Boot fundamentals</li>
                      <li>Spring MVC</li>
                      <li>Spring Security</li>
                      <li>Spring Data JPA</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Module 4: Enterprise Java Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 13-14: Database Integration & APIs</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>JDBC and connection pooling</li>
                      <li>Hibernate ORM</li>
                      <li>RESTful API design</li>
                      <li>API documentation with Swagger</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 15-16: Final Project & Career Preparation</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Capstone project development</li>
                      <li>Code reviews and best practices</li>
                      <li>Portfolio building</li>
                      <li>Technical interview preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Projects You'll Build</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Banking Application</h3>
                  <p className="text-gray-700 mb-4">
                    Build a console-based banking system with account management, transactions, and basic security
                    features. Implement OOP principles and file-based storage.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Core Java</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">File I/O</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">OOP</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Inventory Management System</h3>
                  <p className="text-gray-700 mb-4">
                    Create a desktop application for inventory tracking with JDBC database integration, reporting
                    features, and a Swing-based user interface.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Java Swing</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JDBC</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">MySQL</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Task Management API</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a RESTful API for task management with Spring Boot. Implement user authentication, task CRUD
                    operations, and data validation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring Boot</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">REST API</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JPA</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">E-commerce Platform</h3>
                  <p className="text-gray-700 mb-4">
                    Build a full-stack e-commerce application with Spring MVC, Thymeleaf templates, and Spring Security
                    for user authentication and authorization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring MVC</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Thymeleaf</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring Security</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Microservices Application</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a microservices-based application with service discovery, API gateway, and inter-service
                    communication using Spring Cloud.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Microservices</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring Cloud</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Docker</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Capstone Project</h3>
                  <p className="text-gray-700 mb-4">
                    Design and develop a complex enterprise application of your choice that incorporates all the skills
                    learned throughout the course.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Full Stack</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring Boot</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "instructors" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Meet Your Instructors</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Michael Anderson</h3>
                  <p className="text-blue-600 mb-2">Senior Java Developer</p>
                  <p className="text-gray-700 mb-4">
                    12+ years of experience in Java development. Previously worked at Amazon and Oracle.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Microservices</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Jennifer Lee</h3>
                  <p className="text-blue-600 mb-2">Java Architect</p>
                  <p className="text-gray-700 mb-4">
                    9 years of experience specializing in enterprise Java applications and cloud deployment.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Spring Boot</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">AWS</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src="/api/placeholder/150/150" alt="Instructor" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Raj Patel</h3>
                  <p className="text-blue-600 mb-2">Database Specialist</p>
                  <p className="text-gray-700 mb-4">
                    Expert in Java persistence technologies with 7 years of industry experience.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Hibernate</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JPA</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "careers" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Career Opportunities</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Job Roles After Completion</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Java Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $80,000 - $120,000</p>
                    <p className="text-gray-700">Build and maintain Java applications for various business domains.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Backend Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $85,000 - $125,000</p>
                    <p className="text-gray-700">
                      Focus on server-side logic, database integration, and API development.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Spring Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $90,000 - $135,000</p>
                    <p className="text-gray-700">Specialize in building applications with the Spring framework.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Industry Demand</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Java developers remain among the most sought-after tech professionals globally. According to
                      recent surveys, there's a <span className="font-bold">28% growth</span> in Java development job
                      postings year over year.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Java's enterprise adoption means jobs across banking, finance, healthcare, e-commerce, and
                      government sectors, offering stable career paths with excellent growth potential.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Career Support</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Resume Building</h4>
                    <p className="text-gray-700">
                      Get professional help crafting a tech resume that stands out to recruiters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Mock Interviews</h4>
                    <p className="text-gray-700">Practice technical interviews with industry professionals.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Job Placement Assistance</h4>
                    <p className="text-gray-700">
                      Access to our network of hiring partners and job placement services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/50/50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Mark Johnson</h4>
                  <p className="text-gray-600 text-sm">Java Developer at IBM</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Java course was exactly what I needed to transition into tech. The projects were challenging but
                practical, and I secured a job offer within 2 months of completing the course."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/50/50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sophia Chen</h4>
                  <p className="text-gray-600 text-sm">Backend Developer at Salesforce</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I had zero coding experience when I started. The instructors made complex Java concepts easy to
                understand, and the curriculum was structured perfectly. I now work as a backend developer!"
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src="/api/placeholder/50/50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Daniel Martinez</h4>
                  <p className="text-gray-600 text-sm">Java Developer at Capital One</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Spring Boot section of the course was exceptional. I built a portfolio that impressed recruiters
                and landed multiple job offers. The career support was invaluable during my job search."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Do I need prior coding experience?",
              answer:
                "No, this course is designed for complete beginners. We start with the fundamentals and gradually build up to more advanced concepts.",
            },
            {
              question: "What equipment do I need for this course?",
              answer:
                "You'll need a computer (Windows, Mac, or Linux) with internet access. A minimum of 8GB RAM is recommended for a smooth development experience.",
            },
            {
              question: "Are the classes live or pre-recorded?",
              answer:
                "We offer a hybrid model. Core content is available as pre-recorded videos, but we also have live coding sessions, workshops, and Q&A sessions each week.",
            },
            {
              question: "How much time should I commit each week?",
              answer:
                "We recommend dedicating at least 15-20 hours per week to get the most out of the course. This includes attending sessions, completing assignments, and working on projects.",
            },
            {
              question: "Will I get a certificate after completion?",
              answer:
                "Yes, you'll receive an industry-recognized certificate upon successful completion of the course and all required projects.",
            },
            {
              question: "What kind of job support is provided?",
              answer:
                "We offer resume reviews, LinkedIn profile optimization, portfolio feedback, mock interviews, and connections to our hiring partners in the tech industry.",
            },
          ].map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-left">{faq.question}</span>
                <ChevronDown size={20} className={`transition-transform ${activeFaq === index ? "rotate-180" : ""}`} />
              </button>

              {activeFaq === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Java Development Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next cohort and transform your career with in-demand Java development skills.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Enroll Now
            </button>
            </Link>
            <Link to="/contact">
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Download Course Brochure
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Have Questions? Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Next Batch Starts</h4>
                  <p className="text-gray-700">June 1, 2025</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Limited Seats</h4>
                  <p className="text-gray-700">Only 30 students per batch</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Award size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">Early Bird Discount</h4>
                  <p className="text-gray-700">20% off until May 15, 2025</p>
                </div>
              </div>
            </div>

            <div>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="query">
                    Your Query
                  </label>
                  <textarea
                    id="query"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                    rows="3"
                  ></textarea>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      {/* Tech Stack Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies You'll Master</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <FileCode size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Core Java</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Layers size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Spring Boot</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Code size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Hibernate</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Code size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">RESTful APIs</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Layers size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Microservices</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Database size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">SQL & NoSQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
