/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import I5 from '../Components/Images/5.jpg'
import I6 from '../Components/Images/6.jpg'
import I7 from '../Components/Images/7.jpg'

import HProjectsSection from '@/Components/HProjectsSection'
import AsSeenIn from '@/Components/AsSeenInSection'

import F1 from '../Components/Images/Footer/1.png'
import F2 from '../Components/Images/Footer/2.png'
import ScrollToTop from '@/Components/ScrollToTop'
import HeroSection from '@/Components/HeroSection'




export default function Home() {
  
   
  return (
   <>
    <ScrollToTop/>
   <HeroSection/>

   {/* Section 1  */}

   <section className="container mx-auto flex flex-col lg:flex-row lg:mt-[50px] mt-[25px] items-center w-full">
      {/* Text Column */}
      <div className="w-full lg:w-1/2 p-6 lg:pr-12">
        {/* Awards Badges */}
        

        {/* Main Text Content */}
        <h2 className="text-2xl   tracking-wide leading-10  mb-4">
          We're passionate about transforming outdoor spaces, creating exceptional gardens you'll want to spend time in all year round.
        </h2>
        
        <p className="text-gray-700 tracking-wide leading-10 mb-4">
          As one of Sydney's leading landscape design and construction companies, Sand & Stone Landscapes offers a complete service from landscape design and construction to property maintenance. We manage every step of the process, so you only need to deal with one company. Our aim is to make the journey from concept to completion a seamless and transparent experience for every homeowner.
        </p>
      </div>

      {/* Image Column */}
      <div className="w-full lg:w-1/2 lg:h-[800px] h-[600px] relative">
        <Image 
          src={I5} // Update this path to your actual image
          alt="Landscape Design" 
          fill
          className="object-cover shadow-lg shadow-gray-950"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>


    {/* Section 2 */}
    <div className="relative lg:mt-[130px] md:mt-[380px] mt-[200px]">
      {/* Full-width yellow container */}
      <section className="w-full bg-[#2a7d2e] relative">
        <div className="container mx-auto px-4 relative">
          {/* Positioning of images and content */}
          <div className="relative grid lg:grid-cols-2 gap-8 min-h-[550px]">
            {/* Left side content and images */}
            <div className="lg:pr-8 z-10 relative">
             

              {/* Top white interior image on left */}
              <div className="absolute shadow-lg shadow-gray-950 lg:top-[-30%] md:top-[-70%] top-[-30%] left-0 w-full lg:w-[100%] aspect-video z-10">
                <Image 
                  src={I6} 
                  alt="White interior" 
                  fill 
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Text Content */}
              <div className="lg:pt-[20%] pt-[25%] lg:pr-12 pr-4 relative  lg:left-[120%] text-white">
                <p className="text-base  lg:leading-7">
                  Since forming the company in 2010, Director Luke Roodenburg and his team of experienced landscapers have transformed hundreds of outdoor spaces across Sydney, from the Hills District to the Inner West, to the North Shore. Every member of our team shares the company&apos;s passion for creating exceptional outdoor spaces. And every project we undertake, whether it be a small courtyard, suburban backyard or a rural estate, is constructed with the utmost care and attention to detail and treated as if it were our own.
                </p>
              </div>
            </div>

            {/* Right side images */}
            <div className="relative">
              {/* Bottom outdoor seating image */}
              <div className="absolute shadow-lg shadow-gray-950 md:bottom-[-250%] lg:bottom-[-30%] bottom-[-130%] right-0 w-full lg:w-[100%] aspect-video">
                <Image 
                  src={I7}
                  alt="Outdoor seating" 
                  fill 
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom text section */}
      <div className="container mx-auto  px-4 mt-[25%] md:mt-[30%] lg:mt-[4%] ">
       
          <p className="text-base lg:text-start lg:pl-20 md:text-center  leading-7 text-gray-800">
            Combination of the quality of workmanship and <br></br> the quality of materials used that ensure <br></br>our gardens not only look and feel beautiful <br></br> but most importantly stand the test of time.
          </p>
       
      </div>
    </div>
  <HProjectsSection/>
  <AsSeenIn/>

 
  
   </>
  )
}
