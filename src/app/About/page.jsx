
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import Link from 'next/link';
import A1 from '@/Components/Images/About/1.jpg';
import A2 from '@/Components/Images/About/2.jpg';
import A3 from '@/Components/Images/About/3.jpg';
import A4 from '@/Components/Images/About/4.jpg';
import ScrollToTop from '@/Components/ScrollToTop';


export default function About() {
    return (
        <>
         <ScrollToTop/>
        <main className="container mt-16 ">
       
            {/* First section - One image on left, text on right */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Single image on left */}
                <div>
                    <div className=" ">
                        <Image
                            src={A1}
                            alt="Garden landscape"
                            className="h-80 object-cover shadow-lg shadow-gray-950 object-center lg:h-[600px] w-full"
                        />
                    </div>
                </div>

                {/* Text on right */}
                <div>
                    <h1 className="text-3xl font-semibold lg:mt-10 text-gray-800 uppercase mb-4">ABOUT</h1>
                    <div className="w-full h-px bg-[#37b629] mb-6"></div>
                    <p className="text-gray-700">
                        Since starting Sand & Stone Landscapes in early 2010&rsquo;
                        Director Luke Roodenburg and his growing team of
                        dedicated professionals&rsquo; have transformed hundreds of
                        outdoor spaces across Sydney&rsquo; from the Hills District to the
                        Inner West&rsquo; to the North Shore.
                    </p>
                </div>
            </div>

            {/* Second section - Text on left, image on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Text on left */}
                <div className=' items-center flex '>
                    <p className="text-gray-700 lg:mt-20">
                        We pride ourselves on our transparent relationship with
                        homeowners&rsquo; working closely and collaboratively with them
                        every step of the process from the initial consultation and
                        design through to construction. We also have a dedicated
                        garden maintenance team who specialize in keeping
                        gardens looking lush and beautiful&rsquo; to the envy of the street.
                        Have a browse through our <Link href="/portfolio" className="text-blue-600 hover:underline">recent work</Link> and read what our
                        clients have to say about working with us.
                    </p>
                </div>

                {/* Image on right */}
                <div className="relative">
                    <div className="absolute lg:top-[-100%] lg:right-0 lg:w-full lg:h-[800px] w-full h-80">
                        <Image
                            src={A2}
                            alt="Stone pavers with garden"
                            layout="fill"
                            objectFit="cover"
                            className="object-center  shadow-lg shadow-gray-950 "
                        />
                    </div>
                </div>
            </div>


            {/* Third section - Full width yellow background with image and text */}
            <div className="w-full mt-[350px]  lg:[350px] lg:[100px]   py-32  relative bg-[#2a7d2e] ">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        {/* Image on left */}
                        <div className="relative top-[-60%] h-80 lg:h-auto w-full">
                            <Image
                                src={A3}
                                alt="Luke Roodenburg sitting on a stone wall"
                                layout="fill"
                                objectFit="cover"
                                className="shadow-lg shadow-gray-950 object-center"
                            />
                        </div>

                        {/* Text on right */}
                        <div className="lg:col-span-2 text-white lg:my-0 md:my-[-15%] my-[-30%] lg:p-8">
                            <h2 className="text-2xl font-semibold mb-2">LUKE ROODENBURG</h2>
                            <h3 className="text-xl mb-6">DIRECTOR</h3>
                            <div className="w-full h-px bg-[#37b629] mb-6"></div>

                            <p className="mb-6">
                                Luke began his landscaping career after completing his trade
                                certificate in Horticulture in 2003. After several years of working
                                for different landscape design companies in Sydney and London&rsquo;
                                he decided it was time to start his own business. In early 2010&rsquo;
                                he started Sand & Stone Landscapes with a vision to create
                                beautiful and functional outdoor spaces across Sydney.
                            </p>

                            <p>
                                Luke's friendly, honest and open nature, combined with his keen
                                eye for detail has earned him a solid reputation amongst his
                                clientele. Luke is committed to professionalism and ensures a
                                high standard of work every time. Luke is passionate about
                                working with natural products such as sandstone, granite and
                                hardwood and takes pride in being able to transform an outdoor
                                space that is often unusable into something that is enjoyable to
                                live in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Testimonial section with background image */}
            <section 
                className="w-full h-auto py-12 text-center italic relative"
                style={{
                    backgroundImage: `url(${A4.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    position: 'relative'
                }}
            >
                {/* White overlay for better text readability */}
                <div className="absolute inset-0  bg-black bg-opacity-40"></div>
                
                {/* Text overlay */}
                <div className="max-w-4xl container mx-auto relative z-10">
                    <p className="my-8 text-white leading-relaxed">
                        "Luke and his team from Sand and Stone landscape design were fantastic to work with from beginning
                        to end. We had some clear ideas about converting our hot Inner city small backyard into a cool green
                        space with a plunge pool and tropical surrounds. He took our initial brief and added layers of design
                        thinking in details we chose through to the paving and glass we should use, all just fitting together
                        cohesively, beautifully to create a stunning space. Luke was always on site and reachable whenever
                        we needed to call. He even helped us plan our pool logistics. So we had this incredible project
                        management support as well as landscaping expertise.
                    </p>
                    <p className="mb-6 text-white leading-relaxed">
                        Our oasis is so beautiful and gives us endless pleasure. So many people ask us who created our
                        space, and we never hesitate to tell them about Luke and the Sand and stone team."
                    </p>
                    <p className="font-semibold  text-white">LYNN</p>
                    <p className="font-semibold  text-[#2a7d2e]">Stanmore</p>

                        {/* Call to action button */}
            <div className="text-center my-16">
                <Link href="/contact" className="inline-block bg-[#2a7d2e] hover:bg-[#37b629] text-white font-semibold py-2 px-8 uppercase transition duration-300">
                    GET IN TOUCH
                </Link>
            </div>
                </div>
             
            </section>
           
           
        </main>
        </>
    );
}