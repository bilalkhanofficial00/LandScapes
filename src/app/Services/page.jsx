/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import Image from 'next/image'
import S1 from '@/Components/Images/Services/1.jpg'
import S2 from '@/Components/Images/Services/2.jpeg'
import S3 from '@/Components/Images/Services/3.jpg'
import S4 from '@/Components/Images/Services/4.jpg'
import ScrollToTop from '@/Components/ScrollToTop'
import Link from 'next/link'

// Modal Component for service details
const ServiceModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay with opacity */}
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            
            {/* Modal content */}
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto z-10 relative">
                <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-xl font-medium text-gray-800">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-6 text-gray-700 space-y-4">
                    {content}
                </div>
            </div>
        </div>
    );
};

// Service Card Component with modal trigger
const ServiceCard = ({ title, description, expandedContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-md relative pb-16">
            <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
            <div className="w-16 h-0.5 bg-[#37b629] mb-4"></div>
            <p className="text-gray-700 mb-4 text-justify">{description}</p>
            
            <div className="absolute bottom-6 left-6">
                <button 
                    className="text-[#2a7d2e] font-medium hover:text-[#37b629] flex items-center"
                    onClick={() => setIsModalOpen(true)}
                >
                    Learn More
                    <svg 
                        className="ml-1 w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
            
            <ServiceModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                content={expandedContent}
            />
        </div>
    );
};

export default function Services() {
    // Service data with expanded content
    const serviceData = [
        {
            title: "The Drainage",
            description: "Appropriate drainage is sometimes disregarded, yet it may prevent your backyard from becoming a wet mess!",
            expandedContent: (
                <>
                    <p className="text-justify">
                        Our professional drainage solutions address the critical but often overlooked aspect of landscape design that prevents water damage and ensures the longevity of your outdoor investment. Without proper drainage, even the most beautiful landscapes can quickly deteriorate, leading to erosion, plant disease, and structural damage to your home and hardscaping elements.
                    </p>
                    <p className="text-justify">
                        We offer comprehensive drainage assessments to identify potential problem areas on your property. Our team evaluates soil composition, topography, existing water patterns, and surrounding landscape features to design a customized drainage solution that effectively manages water flow away from sensitive areas.
                    </p>
                    <p className="text-justify">
                        Our drainage services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>French drain installation to collect and redirect subsurface water</li>
                        <li>Surface drains and catch basins to collect runoff from hardscaped areas</li>
                        <li>Channel drains for patios, driveways, and pool surrounds</li>
                        <li>Dry creek beds that provide both drainage function and aesthetic appeal</li>
                        <li>Swales and berms to redirect surface water flow</li>
                        <li>Downspout extensions and underground drainage pipes</li>
                        <li>Rain gardens and bioswales for eco-friendly water management</li>
                    </ul>
                    <p className="text-justify">
                        Each drainage solution is implemented with high-quality materials and meticulous attention to detail. We ensure proper grading, use commercial-grade drainage components, and carefully conceal drainage elements within your landscape design for a seamless appearance that doesn't compromise on function.
                    </p>
                </>
            )
        },
        {
            title: "Colorbond Fencing",
            description: "We take great pride in installing gates and fences that are level and straight! Most of the time, in order to keep the fence level, part of it has to have retaining boards placed beneath it.",
            expandedContent: (
                <>
                    <p className="text-justify">
                        Our Colorbond fencing solutions combine durability, security, and aesthetic appeal to enhance your property boundaries. Made from high-tensile, Australian steel with a specialized coating technology, Colorbond fences resist corrosion, fire, and pest damage while requiring minimal maintenance throughout their extended lifespan.
                    </p>
                    <p className="text-justify">
                        Unlike traditional fencing options, our Colorbond installations are engineered to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Withstand extreme weather conditions including high winds and intense UV exposure</li>
                        <li>Resist chipping, peeling, and cracking that commonly affects painted fences</li>
                        <li>Maintain color integrity for years without fading or requiring repainting</li>
                        <li>Create a clean, modern appearance that complements any architectural style</li>
                        <li>Provide enhanced security with no footholds or easy climbing points</li>
                        <li>Reduce noise pollution from neighboring properties or streets</li>
                    </ul>
                    <p className="text-justify">
                        What truly sets our Colorbond fencing service apart is our installation methodology. Our professional team takes meticulous measurements and prepares the site thoroughly, including addressing any slope challenges with custom retaining solutions beneath the fence line. This ensures your fence maintains perfect horizontal alignment even across uneven terrain.
                    </p>
                    <p className="text-justify">
                        We offer a variety of Colorbond design options:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Standard panel fencing in heights from 1.2m to 2.4m</li>
                        <li>Custom gates with matching Colorbond panels</li>
                        <li>Slat-style fencing for a more contemporary look</li>
                        <li>Privacy screens and partial height barriers</li>
                        <li>A full spectrum of designer colors to complement your home's exterior</li>
                    </ul>
                    <p className="text-justify">
                        Every installation includes proper concrete footings, precise post alignment, and expert panel attachment for a fence that remains straight and secure for decades.
                    </p>
                </>
            )
        },
        {
            title: "Artificial & Natural Grass",
            description: "Are you tired of constantly maintaining your lawn? Whether it's mowing, watering, or other maintenance tasks, we offer solutions with both natural and artificial options.",
            expandedContent: (
                <>
                    <p className="text-justify">
                        Our comprehensive lawn solutions cater to every preference and lifestyle, whether you desire the traditional beauty of natural turf or the convenience of modern artificial grass. Both options are installed with expert precision to ensure optimal performance and longevity.
                    </p>
                    <h4 className="font-medium text-lg mt-5 mb-2">Artificial Grass Solutions</h4>
                    <p className="text-justify">
                        Today's premium artificial turf has evolved significantly from earlier generations, offering remarkably realistic appearance and texture while eliminating virtually all maintenance requirements. Our artificial grass installations include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Thorough site preparation including removal of existing vegetation and soil grading</li>
                        <li>Installation of proper drainage systems with crushed aggregate base</li>
                        <li>Premium-grade artificial turf with multiple blade types, thicknesses and colors for a natural look</li>
                        <li>UV-stabilized materials that resist fading and degradation</li>
                        <li>Antimicrobial infill options for homes with pets</li>
                        <li>Meticulous edge finishing and seam connections for a flawless appearance</li>
                    </ul>
                    <p className="text-justify">
                        The benefits of our artificial grass installations include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Zero watering requirements, saving thousands of gallons annually</li>
                        <li>No mowing, fertilizing, or pesticide applications needed</li>
                        <li>Consistent appearance regardless of weather or season</li>
                        <li>Excellent drainage preventing puddles or muddy areas</li>
                        <li>Safe play surface for children and pets with no chemicals</li>
                        <li>Expected lifespan of 15-20 years with minimal maintenance</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Natural Grass Solutions</h4>
                    <p className="text-justify">
                        For those who prefer the living beauty of natural grass, we offer premium sod installation services with varieties specifically selected for your local climate conditions and intended usage patterns. Our natural lawn installations include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Soil testing and amendment to create optimal growing conditions</li>
                        <li>Installation of proper irrigation systems calibrated for efficiency</li>
                        <li>Premium-grade sod from specialized turf farms</li>
                        <li>Variety selection based on sun exposure, traffic patterns, and aesthetic preferences</li>
                        <li>Post-installation care program to ensure successful establishment</li>
                        <li>Optional maintenance plans for ongoing lawn health</li>
                    </ul>
                    <p className="text-justify">
                        All our grass solutions come with detailed care instructions and follow-up support to ensure your complete satisfaction with your new lawn, whether natural or artificial.
                    </p>
                </>
            )
        },
        {
            title: "Structural Retaining Wall",
            description: "For your retaining wall needs, we can provide a wide range of alternatives.",
            expandedContent: (
                <>
                    <p className="text-justify">
                        Our structural retaining walls blend engineering excellence with aesthetic design to solve elevation challenges while enhancing your landscape's visual appeal. These essential landscape elements control erosion, create usable space on sloped properties, and provide dramatic visual interest when properly executed.
                    </p>
                    <p className="text-justify">
                        Every retaining wall project begins with a thorough site assessment where we evaluate:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Soil type and stability conditions</li>
                        <li>Water drainage patterns and hydrostatic pressure considerations</li>
                        <li>Height requirements and load-bearing needs</li>
                        <li>Access for construction equipment and materials</li>
                        <li>Integration with existing landscape features</li>
                        <li>Local building codes and permit requirements</li>
                    </ul>
                    <p className="text-justify">
                        We offer multiple retaining wall solutions to match your property's specific needs:
                    </p>
                    <h4 className="font-medium text-lg mt-5 mb-2">Segmental Block Retaining Walls</h4>
                    <p className="text-justify">
                        Our most popular option utilizes engineered concrete blocks that interlock for exceptional stability. These systems offer:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Multiple textures and color options to complement your home</li>
                        <li>Flexible design capabilities including curves and terracing</li>
                        <li>No mortar installation for excellent drainage performance</li>
                        <li>Integrated geogrid reinforcement for walls exceeding 4 feet</li>
                        <li>Easy incorporation of steps, corners, and caps</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Natural Stone Retaining Walls</h4>
                    <p className="text-justify">
                        For a more organic, timeless appearance, our natural stone walls provide unmatched character:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Locally-sourced stone options including granite, limestone, and sandstone</li>
                        <li>Dry-stack or mortared construction techniques</li>
                        <li>Custom cutting and fitting for precise installation</li>
                        <li>Integration of natural boulders for dramatic effect</li>
                        <li>Optional stone steps and caps for a cohesive appearance</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Timber Retaining Walls</h4>
                    <p className="text-justify">
                        For certain applications, pressure-treated timber or hardwood retaining structures offer:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Warm, natural appearance that blends with wooded settings</li>
                        <li>Cost-effective solutions for lower walls</li>
                        <li>Easy integration with timber steps and landscape features</li>
                        <li>Proper installation with deadmen anchors and drainage systems</li>
                    </ul>
                    <p className="text-justify">
                        All our retaining wall installations include proper foundation preparation, backfilling with appropriate materials, and installation of drainage systems to ensure long-term stability and performance.
                    </p>
                </>
            )
        },
        {
            title: "Composite Decking",
            description: "You may install this incredibly durable product on concrete or on a floating frame. Available in various colors and depths to meet your needs.",
            expandedContent: (
                <>
                    <p className="text-justify">
                        Our premium composite decking solutions provide the perfect blend of natural wood aesthetics and modern durability, creating outdoor living spaces that require minimal maintenance while offering maximum enjoyment. Unlike traditional wooden decks that demand regular staining, sealing, and replacement of warped or splintered boards, composite decking maintains its beauty for decades with simple cleaning.
                    </p>
                    <p className="text-justify">
                        The advanced composite materials we use offer significant advantages:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Resistance to fading, staining, scratching, and mold</li>
                        <li>No splintering, warping, or rotting even in extreme weather</li>
                        <li>Eco-friendly composition from recycled wood fibers and polymers</li>
                        <li>Available in a wide spectrum of colors and wood grain patterns</li>
                        <li>Specialized hidden fastener systems for a seamless appearance</li>
                        <li>Manufacturer warranties typically extending 25-30 years</li>
                    </ul>
                    <p className="text-justify">
                        Our installation methods are versatile and adaptable to various site conditions:
                    </p>
                    <h4 className="font-medium text-lg mt-5 mb-2">Traditional Elevated Deck Construction</h4>
                    <p className="text-justify">
                        For multi-level outdoor spaces or areas requiring elevation from the ground:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Engineered substructure using pressure-treated lumber or aluminum framing</li>
                        <li>Concrete pier foundations with proper frost-depth footings</li>
                        <li>Code-compliant structural design for load requirements</li>
                        <li>Integration of steps, stairs, and multi-level platforms</li>
                        <li>Custom railing systems in matching composite or complementary materials</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Concrete Overlay Applications</h4>
                    <p className="text-justify">
                        For transforming existing concrete patios or flat surfaces:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Specialized ventilated substructure systems that prevent moisture buildup</li>
                        <li>Proper slope considerations for effective drainage</li>
                        <li>Height adjustable pedestals to create level surfaces over uneven concrete</li>
                        <li>No penetration of existing waterproof membranes or surfaces</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Low-Profile/Ground-Level Installations</h4>
                    <p className="text-justify">
                        For areas where minimal elevation change is desired:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Carefully prepared crushed stone base for stability</li>
                        <li>Proper drainage provisions to prevent water pooling</li>
                        <li>Specialized low-profile framing systems</li>
                        <li>Seamless transitions to adjacent landscape features</li>
                    </ul>
                    <p className="text-justify">
                        Our deck designs can incorporate numerous custom features:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Built-in seating and storage solutions</li>
                        <li>Integrated lighting systems for ambiance and safety</li>
                        <li>Pergolas and shade structures</li>
                        <li>Custom stairs and multi-level transitions</li>
                        <li>Deck skirting and facade treatments</li>
                        <li>Privacy screens and wind barriers</li>
                    </ul>
                    <p className="text-justify">
                        We handle all aspects of the project including design, permitting, material selection, and expert installation to create an outdoor living space that extends your home's functionality and value.
                    </p>
                </>
            )
        },
        {
            title: "Excavation",
            description: "In order to level the ground, build drainage, or do a mix of these tasks, most conversions need some sort of excavation or soil addition.",
            expandedContent: (
                <>
                    <p className="text-justify">
                        Our professional excavation services form the critical foundation for virtually all significant landscape transformations. Using specialized equipment and experienced operators, we precisely reshape terrain, prepare building sites, and create the proper base conditions for hardscaping elements and structural features.
                    </p>
                    <p className="text-justify">
                        Before any excavation begins, we conduct thorough site preparation:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Comprehensive utility marking and location services</li>
                        <li>Protection of existing vegetation and features to be preserved</li>
                        <li>Erosion control measures to prevent runoff and sediment issues</li>
                        <li>Access planning for equipment and material movement</li>
                        <li>Soil evaluation to identify composition and stability factors</li>
                    </ul>
                    <p className="text-justify">
                        Our excavation capabilities include:
                    </p>
                    <h4 className="font-medium text-lg mt-5 mb-2">General Landscape Grading</h4>
                    <p className="text-justify">
                        Creating optimal terrain contours for:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Proper water drainage away from structures</li>
                        <li>Level areas for patios, play spaces, and lawn installations</li>
                        <li>Aesthetic berms and landscape mounding</li>
                        <li>Terracing of sloped properties to create usable space</li>
                        <li>Foundation preparation for outdoor structures</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Precision Excavation</h4>
                    <p className="text-justify">
                        Specialized digging for specific landscape elements:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Swimming pool and water feature excavation</li>
                        <li>Trench digging for irrigation, drainage, and utility lines</li>
                        <li>Footing preparation for retaining walls and structures</li>
                        <li>Tree and large plant installation pits</li>
                        <li>Hardscape base preparation for patios and walkways</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Land Clearing</h4>
                    <p className="text-justify">
                        Preparing undeveloped areas for landscape development:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Selective vegetation removal while preserving valuable trees</li>
                        <li>Stump grinding and root removal</li>
                        <li>Brush clearing and site cleaning</li>
                        <li>Rock removal and management</li>
                        <li>Topsoil preservation for reuse in finished landscaping</li>
                    </ul>
                    <h4 className="font-medium text-lg mt-5 mb-2">Material Management</h4>
                    <p className="text-justify">
                        Handling soil and materials efficiently:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Soil amendment and improvement processes</li>
                        <li>Proper disposal of excess materials</li>
                        <li>Importation of specialized soils and aggregates</li>
                        <li>Recycling of suitable materials on-site</li>
                        <li>Erosion control during and after excavation</li>
                    </ul>
                    <p className="text-justify">
                        Our excavation work is performed with respect for the environment and your property. We utilize equipment appropriate to the scale of the project, from mini-excavators for precise work in established gardens to larger machinery for major earthmoving projects. Throughout the process, we maintain clean work areas, control dust, and minimize disruption to surrounding landscape elements.
                    </p>
                </>
            )
        }
    ];

    return (
        <>
        <ScrollToTop/>
        <div className="min-h-screen">
            <main className="container pt-8 lg:mb-[50px]">
                {/* Services Header Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12">
                    <div className="w-full lg:w-1/2 mb-8 text-center lg:text-left lg:mt-[100px] lg:mb-0">
                        <h1 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">SERVICES</h1>
                        <div className="w-52 h-0.5 mx-auto lg:mx-0 bg-[#37b629] mb-8"></div>
                        <p className="text-gray-700 max-w-lg mx-auto lg:mx-0 text-justify">
                            As a full service landscaping company, we provide
                            a high end all inclusive landscaping solution.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative">
                            <Image
                                src={S1}
                                alt="Garden seating area with wooden fence and cushions"
                                className="object-cover shadow-lg shadow-gray-950 w-full h-auto lg:h-[550px] object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Specialized Services Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
                    {serviceData.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            description={service.description}
                            expandedContent={service.expandedContent}
                        />
                    ))}
                </div>

                {/* Landscape design */}
                <div className="w-full relative bg-[#2a7d2e] lg:mt-44 p-4 lg:p-8 mt-[280px] lg:py-40 text-white rounded flex flex-col lg:flex-row">
                    {/* Left side - Image */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 absolute md:top-[-45%] top-[-26%] lg:top-[-13%] left-0 lg:left-5 z-10">
                        <div className="relative h-64 lg:h-[300px] w-full lg:w-[450px]">
                            <Image
                                src={S2}
                                alt="Landscape design sketch with colored pencils"
                                fill
                                className="object-cover shadow-lg shadow-gray-950 object-center"
                            />
                        </div>
                    </div>

                    {/* Right side - Text content */}
                    <div className="w-full mt-4 lg:mt-0 lg:w-[55%] lg:ml-auto">
                        <h2 className="text-2xl font-semibold mb-6">LANDSCAPE DESIGN</h2>
                        <div className="w-full h-0.5 bg-[#37b629] mb-8"></div>
                        <div className='leading-7 lg:leading-8 tracking-wide text-sm lg:text-base'>
                            <p className="mb-4 text-justify">
                                Depending on your requirements, our landscape design team provide you with a complete design along with your quote. When you work with us, you'll have access to the skill, knowledge, and expertise needed to bring your landscape vision to life.
                            </p>
                            <p className="mb-4 text-justify">
                                Whether you're after a recommendation for the design or set on a particular look, we're completely collaborative and hands-on with the project from start to finish. We work with you to understand your vision and conceptualize it according to your tastes and preferences. Our goal is to create a landscape design that will be beautiful, unique and functional.
                            </p>
                            <p className="mb-4 text-justify">
                                The first step is for use to meet you on site to discuss your needs and requirements for the project. We will go over your goals for the space, design elements you want included, and of course, your budget.
                            </p>
                            <p className="text-justify">
                                We specialize in a wide range of landscaping designs, such as natural and earthy or sleek and modern. We can produce a landscape design for entire backyard spaces including new pool surrounds, existing pool renovations as well as front entrances.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Landscape Construction Section */}
                <div className="flex flex-col lg:flex-row my-16 lg:my-20 relative items-center mb-16">
                    <div className="w-full leading-7 tracking-wide lg:w-1/2 pr-0 lg:pr-12 order-2 lg:order-1 mt-64 lg:mt-0">
                        <h2 className="text-2xl font-semibold text-gray-800 lg:mt-0 mt-[-20px] mb-6">LANDSCAPE CONSTRUCTION</h2>
                        <p className="text-gray-700 mb-4 text-justify">
                            Our landscape construction team has been handpicked for their skill, experience, qualifications and attention to detail. They are thorough, careful and exceptional at what they do. Sand & Stone Landscapes takes pride in creating highly functional and aesthetically pleasing outdoor environments that can be enjoyed for years.
                        </p>
                        <p className="text-gray-700 mb-8 text-justify">
                            We have a solid reputation for delivering exceptional landscape construction. Our team are easy to deal with, flexible and always puts the customer at the centre of everything we do.
                        </p>
                        <div className='justify-center flex lg:justify-start'>
                            <Link href='/Contact'>
                        <button className="bg-[#2a7d2e] text-white px-6 py-3 rounded hover:bg-[#37b629] transition">
                            CHAT WITH US
                        </button>
                        </Link>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="absolute left-0 lg:right-0 lg:left-auto top-[-10%] lg:top-[-50%] w-full lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2">
                        <div className="h-64 lg:h-[700px] w-full">
                            <Image
                                src={S3}
                                alt="Modern swimming pool with landscaping"
                                fill
                                className="object-cover shadow-lg shadow-gray-950 object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Garden Maintenance Section */}
                <div className="flex flex-col my-16 lg:my-36 lg:flex-row items-center">
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="relative h-64 lg:h-[550px] w-full">
            <Image
                src={S4}
                alt="Well-maintained garden with flowers and pathways"
                fill
                className="object-cover object-center shadow-lg shadow-gray-400"
            />
        </div>
    </div>
    <div className="w-full lg:w-1/2 pl-0 lg:pl-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">GARDEN MAINTENANCE</h2>
        <p className="text-gray-700 leading-7 tracking-wide mb-4 text-justify">
            Our dedicated garden maintenance team specialise in rejuvenating and maintaining outdoor environments. All our gardeners are trained landscaping professionals who know how to bring out the natural beauty of any garden. Once we understand what your garden needs, we can create a tailored maintenance solution to ensure your garden looks and stays amazing all year round.
        </p>
        <p className="text-gray-700 font-semibold mb-4">Our Services Include:</p>
        <ul className="text-gray-700 leading-7 tracking-wide list-disc pl-5 space-y-1">
            <li>Regular maintenance visits</li>
            <li>One off garden tidy up</li>
            <li>Site clearing</li>
            <li>Lawn mowing & edging</li>
            <li>Planting</li>
            <li>Hedging & pruning</li>
            <li>Mulching</li>
            <li>Weeding</li>
            <li>Pest & disease treatment</li>
        </ul>
    </div>
</div>
            </main>
        </div>
        </>
    )
}