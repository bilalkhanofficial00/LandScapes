import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import F1 from '../Components/Images/Footer/1.png';
import F2 from '../Components/Images/Footer/2.png';
import F3 from '../Components/Images/Footer/3.png';
import F4 from '../Components/Images/Footer/4.jpeg';
import F5 from '../Components/Images/Footer/5.png';


const Footer = () => {
  return (
    <>
    <div className="flex items-center bg-white border-b border-[#37b629] p-4 "></div>
    <footer className="bg-[#ffffff] text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links Section */}
        <div className="mb-4 justify-center md:text-left text-center  md:mb-0">
          <h4 className="text-lg text-gray-900 font-semibold mb-3">QUICK LINKS</h4>
          <div className="space-y-2 text-gray-900">
            <a href="#" className="block hover:text-[#37b629] pb-1 hover:border-b-2 hover:border-[#2a7d2e] transition-all duration-300 ">Landscaping Projects</a>
            <a href="#" className="block hover:text-[#37b629] pb-1 hover:border-b-2 hover:border-[#2a7d2e] transition-all duration-300">Landscaping Services</a>
            <a href="#" className="block hover:text-[#37b629] pb-1 hover:border-b-2 hover:border-[#2a7d2e] transition-all duration-300">About Us</a>
            <a href="#" className="block hover:text-[#37b629] pb-1 hover:border-b-2 hover:border-[#2a7d2e] transition-all duration-300">Contact Us</a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mb-4 md:mb-0 justify-center  text-center md:text-left">
          <h4 className="text-lg text-gray-900 font-semibold mb-3">CONTACT US</h4>
          <div className="space-y-2   text-gray-900">
            <p className='hover:text-[#37b629] cursor-pointer'>Send us an email</p>
            <p className='hover:text-[#37b629] cursor-pointer'>0410 654 941</p>
            <p className='hover:text-[#37b629] cursor-pointer'>West Pennant Hills, NSW 2125 Australia</p>
            
            {/* Social Icons */}
            <div className="flex text-gray-900 justify-center md:justify-start space-x-4 mt-3">
              <a href="#" className="text-[#2a7d2e] hover:text-[#37b629]"><FaFacebook size={24} /></a>
              <a href="#" className="text-[#2a7d2e] hover:text-[#37b629]"><FaInstagram size={24} /></a>
              <a href="#" className="text-[#2a7d2e] hover:text-[#37b629]"><FaYoutube size={24} /></a>
              <a href="#" className="text-[#2a7d2e] hover:text-[#37b629]"><FaPinterest size={24} /></a>
            </div>
          </div>
        </div>

        {/* Awards and Memberships */}
        <div className="flex flex-col items-center">
          

          {/* Membership Badges */}
          <div className="flex items-center space-x-4">
            <Image 
              src={F4} 
              alt="Landscape Association" 
              width={100} 
              height={50} 
            />
            <Image 
              src={F5}
              alt="Landscape Design Institute" 
              width={100} 
              height={50} 
            />
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="bg-[#2a7d2e] md:py-6 py-3 text-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">
            © SAND & STONE LANDSCAPES PTY LTD | ALL RIGHTS RESERVED
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">DISCLAIMER</a>
            <a href="#" className="text-sm hover:underline">PRIVACY POLICY</a>
            <a href="#" className="text-sm hover:underline">WEBSITE TERMS</a>
            <a href="#" className="text-sm hover:underline">WEBSITE BY MODERN M^</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};


export default Footer;