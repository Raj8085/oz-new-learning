import { useState } from "react"
import {
  Code,
  Lightbulb,
  Users,
  Award,
  Calendar,
  BookOpen,
  Database,
  ChevronDown,
  Cloud,
  Lock,
  Smartphone,
  Layers,
  Globe,
  Layout,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function AppDevelopmentCoursePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile App Development</h1>
              <p className="text-xl mb-6">
                Master the art of building native and cross-platform mobile applications for iOS and Android
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">iOS</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Android</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">Flutter</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">React Native</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium">UI/UX</span>
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
                {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-all">
                  Enroll Now
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-bold transition-all">
                  Download Syllabus
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-800 rounded-full flex items-center justify-center">
                  <Smartphone size={120} strokeWidth={1} />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Layout size={36} strokeWidth={1} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <Code size={36} strokeWidth={1} />
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
            <p className="text-gray-700">24 weeks (6 months)</p>
            <p className="text-gray-700">8 hours per week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Prerequisites</h3>
            </div>
            <p className="text-gray-700">Basic programming knowledge</p>
            <p className="text-gray-700">Familiarity with any programming language</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Award className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-bold">Certification</h3>
            </div>
            <p className="text-gray-700">Industry-recognized certificate</p>
            <p className="text-gray-700">App portfolio on App Store & Play Store</p>
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
                Our Mobile App Development course is designed to transform beginners into job-ready mobile developers
                capable of building professional applications for iOS and Android platforms. You'll learn both native
                and cross-platform development approaches, enabling you to create engaging, high-performance mobile
                experiences for any device.
              </p>

              <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Smartphone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">iOS Development</h4>
                    <p className="text-gray-700">
                      Build native iOS apps using modern frameworks like React native, Flutter and Dart.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Smartphone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Android Development</h4>
                    <p className="text-gray-700">
                      Create native Android applications with Kotlin, Jetpack Compose, and Android SDK
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Layers size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Cross-Platform Development</h4>
                    <p className="text-gray-700">Develop apps for multiple platforms with Flutter and React Native</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Layout size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">UI/UX Design for Mobile</h4>
                    <p className="text-gray-700">
                      Create intuitive, engaging user interfaces following platform design guidelines
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Course Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Lightbulb size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Multiple Platforms</h4>
                  </div>
                  <p className="text-gray-700">Learn to develop for iOS, Android, and cross-platform</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">App Store Publishing</h4>
                  </div>
                  <p className="text-gray-700">Learn to publish apps to App Store and Google Play</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-bold">Portfolio Building</h4>
                  </div>
                  <p className="text-gray-700">Create professional mobile apps for your portfolio</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "curriculum" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Curriculum</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 1: Mobile Development Fundamentals</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 1-2: Introduction to Mobile Development</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Mobile platforms overview (iOS, Android)</li>
                      <li>Mobile app architecture patterns</li>
                      <li>UI/UX principles for mobile</li>
                      <li>Development environment setup</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 3-4: Mobile UI Design</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Design principles for mobile interfaces</li>
                      <li>Wireframing and prototyping</li>
                      <li>Responsive layouts for different screen sizes</li>
                      {/* <li>Platform design guidelines (Material Design, Human Interface)</li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 2: iOS Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 5-6: Swift Programming</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Swift language fundamentals</li>
                      <li>Swift syntax and data structures</li>
                      <li>Object-oriented programming in Swift</li>
                      <li>Swift standard library</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 7-8: iOS App Development</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>UIKit fundamentals</li>
                      <li>View controllers and navigation</li>
                      <li>SwiftUI introduction</li>
                      <li>Working with data and Core Data</li>
                      <li>Networking and API integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 3: Android Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 9-10: Kotlin Programming</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Kotlin language fundamentals</li>
                      <li>Kotlin syntax and data structures</li>
                      <li>Object-oriented programming in Kotlin</li>
                      <li>Kotlin standard library</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 11-12: Android App Development</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Android SDK and architecture</li>
                      <li>Activities, fragments, and lifecycle</li>
                      <li>Jetpack Compose introduction</li>
                      <li>Room database and data persistence</li>
                      <li>Android networking and API integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 4: Flutter Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 13-14: Dart Programming</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Dart language fundamentals</li>
                      <li>Dart syntax and data structures</li>
                      <li>Object-oriented programming in Dart</li>
                      <li>Asynchronous programming with Dart</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 15-16: Flutter App Development</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Flutter framework architecture</li>
                      <li>Widget tree and state management</li>
                      <li>Building responsive UIs with Flutter</li>
                      <li>Navigation and routing</li>
                      <li>Data persistence and API integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Module 5: React Native Development</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 17-18: JavaScript/TypeScript for React Native</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>JavaScript/TypeScript fundamentals</li>
                      <li>ES6+ features</li>
                      <li>React fundamentals and hooks</li>
                      <li>JSX syntax</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 19-20: React Native App Development</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>React Native architecture</li>
                      <li>React Native components and APIs</li>
                      <li>Navigation with React Navigation</li>
                      <li>State management (Redux, Context API)</li>
                      <li>Native modules integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Module 6: Advanced Topics & App Publishing</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 21-22: Advanced Mobile Features</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Push notifications</li>
                      <li>In-app purchases</li>
                      <li>Maps and location services</li>
                      <li>Camera and media integration</li>
                      <li>Authentication and security</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold">Week 23-24: App Publishing & Career Preparation</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>App Store submission process</li>
                      <li>Google Play Store submission</li>
                      <li>App monetization strategies</li>
                      <li>Analytics and user engagement</li>
                      <li>Portfolio building and interview preparation</li>
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
                  <h3 className="text-xl font-bold mb-3">Food Delivery App (iOS - Swift)</h3>
                  <p className="text-gray-700 mb-4">
                    Build a complete food delivery application with restaurant listings, menu browsing, cart
                    functionality, order tracking, and user profiles using Swift and UIKit/SwiftUI.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Swift</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">UIKit</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">SwiftUI</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Core Data</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Social Media App (Android - Kotlin)</h3>
                  <p className="text-gray-700 mb-4">
                    Create a social networking application with user profiles, posts, comments, likes, and real-time
                    notifications using Kotlin and Jetpack Compose.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Kotlin</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Jetpack Compose</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Room</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Firebase</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">E-commerce App (Flutter)</h3>
                  <p className="text-gray-700 mb-4">
                    Develop a cross-platform e-commerce application with product catalog, shopping cart, payment
                    processing, and order tracking using Flutter and Firebase.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Flutter</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Dart</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Provider</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Firebase</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Travel Companion App (React Native)</h3>
                  <p className="text-gray-700 mb-4">
                    Build a travel companion app with trip planning, location-based recommendations, maps integration,
                    and offline capabilities using React Native.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">React Native</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Redux</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Maps API</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">AsyncStorage</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Fitness Tracking App (iOS & Android)</h3>
                  <p className="text-gray-700 mb-4">
                    Create a fitness tracking application with workout plans, progress tracking, health metrics, and
                    social sharing features for both iOS and Android platforms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Swift</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Kotlin</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">HealthKit</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Google Fit</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Capstone Project</h3>
                  <p className="text-gray-700 mb-4">
                    Design and develop a complex mobile application of your choice using any of the platforms covered in
                    the course. Publish it to the App Store and/or Google Play Store.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Your Choice</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">App Store</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Google Play</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Monetization</span>
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
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Alex Chen</h3>
                  <p className="text-blue-600 mb-2">iOS Development Lead</p>
                  <p className="text-gray-700 mb-4">
                    10+ years of experience in iOS development. Previously worked at Apple and has published over 20
                    apps on the App Store.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Swift</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">SwiftUI</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Priya Sharma</h3>
                  <p className="text-blue-600 mb-2">Android Development Lead</p>
                  <p className="text-gray-700 mb-4">
                    8 years of experience in Android development. Former Google Developer Expert with expertise in
                    Jetpack Compose and Material Design.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Kotlin</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Jetpack</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Marcus Johnson</h3>
                  <p className="text-blue-600 mb-2">Flutter Development Expert</p>
                  <p className="text-gray-700 mb-4">
                    Flutter Developer Advocate with 6 years of experience building cross-platform applications for
                    enterprise clients.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Flutter</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Dart</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Sarah Rodriguez</h3>
                  <p className="text-blue-600 mb-2">React Native Specialist</p>
                  <p className="text-gray-700 mb-4">
                    7 years of experience in React and React Native development. Has built and scaled apps with millions
                    of users.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">React Native</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JavaScript</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt="Instructor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">David Kim</h3>
                  <p className="text-blue-600 mb-2">Mobile UI/UX Expert</p>
                  <p className="text-gray-700 mb-4">
                    Award-winning mobile UI/UX designer with 9 years of experience creating intuitive and engaging
                    mobile experiences.
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">UI/UX</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Design Systems</span>
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
                    <h4 className="font-bold text-lg mb-2">iOS Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $105,000 - $150,000</p>
                    <p className="text-gray-700">
                      Build and maintain native applications for iPhone, iPad, and other Apple devices.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Android Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $100,000 - $145,000</p>
                    <p className="text-gray-700">
                      Create applications for the Android ecosystem across phones, tablets, and other devices.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Flutter Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $95,000 - $140,000</p>
                    <p className="text-gray-700">
                      Develop cross-platform applications using Google's Flutter framework.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">React Native Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $95,000 - $140,000</p>
                    <p className="text-gray-700">
                      Build cross-platform mobile applications using React Native and JavaScript/TypeScript.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Mobile Lead Developer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $130,000 - $180,000</p>
                    <p className="text-gray-700">
                      Lead mobile development teams and architect mobile application solutions.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Mobile UI/UX Designer</h4>
                    <p className="text-gray-700 mb-2">Average Salary: $90,000 - $135,000</p>
                    <p className="text-gray-700">
                      Design intuitive and engaging user interfaces for mobile applications.
                    </p>
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
                      Mobile app developers are in extremely high demand. According to recent surveys, there's a{" "}
                      <span className="font-bold">32% growth</span> in mobile development job postings year over year.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Lightbulb size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      With over 6.3 billion smartphone users worldwide, businesses across all industries are investing
                      heavily in mobile applications, creating abundant opportunities for skilled mobile developers.
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
                      Get professional help crafting a tech resume that highlights your mobile development skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">App Store Publishing</h4>
                    <p className="text-gray-700">
                      Guidance on publishing your apps to the App Store and Google Play Store to build your portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Job Placement Assistance</h4>
                    <p className="text-gray-700">
                      Access to our network of hiring partners and job placement services specializing in mobile
                      development roles.
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
                  <img src="/placeholder.svg?height=50&width=50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Jason Miller</h4>
                  <p className="text-gray-600 text-sm">iOS Developer at Uber</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The iOS development module was exceptional. I went from knowing basic programming to building complex
                apps with Swift and SwiftUI. I landed a job at Uber within weeks of completing the course."
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
                  <img src="/placeholder.svg?height=50&width=50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sophia Chen</h4>
                  <p className="text-gray-600 text-sm">Flutter Developer at Spotify</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Learning Flutter was a game-changer for me. The course provided hands-on projects that helped me build
                a strong portfolio. I'm now working at Spotify building cross-platform apps with Flutter."
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
                  <img src="/placeholder.svg?height=50&width=50" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Marcus Johnson</h4>
                  <p className="text-gray-600 text-sm">Android Developer at Instagram</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Android development section was comprehensive and practical. I learned Kotlin and Jetpack Compose
                from scratch and built several apps that are now on the Google Play Store."
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
              question: "Do I need to own a Mac for iOS development?",
              answer:
                "Yes, for the iOS development portion, you'll need a Mac computer running macOS. This is required to use Xcode, Apple's development environment. For the Flutter and React Native sections, you can develop on either Mac, Windows, or Linux.",
            },
            {
              question: "Which platform should I focus on if I'm a beginner?",
              answer:
                "If you're new to programming, we recommend starting with Flutter as it has a gentler learning curve. If you already have some programming experience, you can choose based on your career goals - iOS and Android for native development, or Flutter/React Native for cross-platform.",
            },
            {
              question: "Will I be able to publish my apps to the App Store and Google Play?",
              answer:
                "Yes! The course includes detailed guidance on the submission process for both the App Store and Google Play. You'll need to pay developer account fees ($99/year for Apple, $25 one-time for Google) to publish your apps.",
            },
            {
              question: "How much time should I commit each week?",
              answer:
                "We recommend dedicating at least 15-20 hours per week to get the most out of the course. This includes attending sessions, completing assignments, and working on projects.",
            },
            {
              question: "Can I specialize in just one platform?",
              answer:
                "Yes, while the course covers all major platforms, you can choose to focus more deeply on the platform that interests you most for your projects and capstone.",
            },
            {
              question: "What kind of support will I receive for app monetization?",
              answer:
                "The course covers various app monetization strategies including in-app purchases, subscriptions, freemium models, and advertising. You'll learn how to implement these technically and strategically in your apps.",
            },
          ].map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-left">{faq.question}</span>
                <ChevronDown size={20} className={`transition-transform ${activeFaq === index ? "rotate-180" : ""}`}/>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Mobile App Development Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our next cohort and transform your career with in-demand mobile development skills across iOS, Android,
            Flutter, and React Native.
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
          <h2 className="text-3xl font-bold text-center mb-12">Technologies You&apos;ll Master</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Smartphone size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Swift</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Smartphone size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">SwiftUI</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Smartphone size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">UIKit</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Smartphone size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Kotlin</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Smartphone size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Jetpack Compose</h3>
            </div>

            {/* <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Smartphone size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Android SDK</h3>
            </div> */}

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Layers size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Flutter</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Code size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Dart</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Layers size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">React Native</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Code size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">JavaScript/TypeScript</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Database size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Firebase</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Globe size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">RESTful APIs</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Layout size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">UI/UX Design</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Lock size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Authentication</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Cloud size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">App Store Publishing</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <Cloud size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center">Google Play Publishing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}