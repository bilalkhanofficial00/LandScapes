import React from 'react';

import LandScapeSlider from './LandScapeSlider';
import CountingGrids from './CountingGrids';
import Link from 'next/link';

export default function LandscapeDesign() {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold text-emerald-900 mb-3">Landscape Design</h1>
          <h2 className="text-2xl md:text-5xl font-medium text-emerald-600 mb-6">Expert Landscape Architecture in Perth</h2>
          <div className="h-1 w-32 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-700 text-justify max-w-3xl mx-auto text-lg leading-relaxed">
            Land Scaping GTS provides meticulous landscape and garden design services to create stunning, 
            natural settings that complement any home or business property. Our expert team is dedicated to 
            delivering premium solutions that transform outdoor spaces into beautiful and functional living areas.
          </p>
        </div>

     <LandScapeSlider/>
      <CountingGrids/>
      

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-800 mb-4">Our Garden Design Services</h2>
            <p className="text-lg text-gray-700 text-justify max-w-3xl mx-auto">
              We provide comprehensive garden landscape design services throughout the Perth metro area, 
              Perth Hills, and surrounding areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Design Consultation", items: ["Site discussions", "Horticultural guidance", "Ideas for landscape design"] },
              { title: "Planning & Development", items: ["Concept designs", "Plans for establishing gardens", "Design plans for landscapes"] },
              { title: "Implementation", items: ["3D and 2D Landscape Architecture", "Complete project management", "Landscape design implementation"] }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-emerald-500">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-800 rounded-xl p-8 text-center text-white">
  <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h2>
  <p className="text-lg mb-6 max-w-2xl mx-auto">
    Contact our team today for a consultation and let us help you create the 
    landscape of your dreams.
  </p>
  
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
    <Link href="/Contact">
      <button className="bg-white text-emerald-800 hover:bg-emerald-100 px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
        Get a Free Quote
      </button>
    </Link>
    <Link href="/Services">
      <button className="border-2 border-white hover:bg-emerald-700 px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto">
        View Our Portfolio
      </button>
    </Link>
  </div>
</div>

      </div>
    </div>
  );
}