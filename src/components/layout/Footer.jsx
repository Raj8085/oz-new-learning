import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin, Whatsapp } from 'lucide-react';
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
// import twitter from '../assets/twitter.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  const whatsappNumber = "9171019136"
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=I+am+interested+in+your+products.+Please+share+the+details`
  return (
    <footer className="text-gray-300 bg-gradient-to-r from-orange-400 to-orange-600 border-t-2 border-white py-20 px-5 md:px-20 lg:px-40"
    // style={{
    //   backgroundColor: '#283B59',
    //   backgroundImage: `radial-gradient(white 10%, transparent 11%)`,
    //   backgroundSize: '10px 10px'
    // }}
    >
      <div>
          {/* Logo and Description */}
          <div className='flex flex-col gap-10 lg:flex-row  justify-between'>

          <div className="w-full">
            {/* <h2 className="text-white text-3xl font-bold mb-4">MCED Footer</h2> */}
            <img src="/ozLearningLogoNew.jpg" alt="Shree Engineers" className="w-20 h-20" />
            <p className="text-white text-lg font-semibold mt-4">
            PREMIER IT TRAINING & PLACEMENT INSTITUTE FOR HIGH-DEMAND JOBS
            </p>
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to='/' className="text-white transition">Home</Link></li>
              <li><Link to='/about' className="text-white transition">About Us</Link></li>
              <li><Link to='/services' className="text-white transition">Services</Link></li>
              <li><Link to='/contact' className="text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Information</h3>
            <ul className="space-y-2 text-white">
              <li>9171453224</li>
              <li>info@ozlearning.com</li>
              <li>PU4 , Indore, Madhya Pradesh, India 452007</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-white">
              <li>10:00am - 7:00pm</li>
              {/* <li>Fri 8:00 - 21:00</li>
              <li>Sat 9:30 - 15: 00</li> */}
              {/* <li>Sun off</li> */}
            </ul>
          </div>
        </div>
          </div>

        {/* Copyright and Social Icons */}
        <div className="mt-12 pt-6 border-t border-white flex flex-col md:flex-row justify-center items-center">
          {/* <p className="text-sm mb-4 md:mb-0">
            Copyright ©2020 All rights reserved | Block is made with by 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">Mudassar Chaudhry</a>
          </p> */}
          
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61566026194334" target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={facebook} alt="Facebook" className="w-10" />
            </a>
            <a href={whatsappLink} target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={whatsapp} alt="Whatsapp" className="w-10" />
            </a>
            <a href="https://www.linkedin.com/company/shree-insulation/about/?viewAsMember=true" target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={linkedin} alt="Linkedin" className="w-10" />
            </a>
            <a href="https://www.instagram.com/shree.insul/" target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={instagram} alt="Instagram" className="w-10" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;