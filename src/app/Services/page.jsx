/* eslint-disable react/no-unescaped-entities */            
import Image from 'next/image'
import S1 from '@/Components/Images/Services/1.jpg'
import S2 from '@/Components/Images/Services/2.jpeg'
import S3 from '@/Components/Images/Services/3.jpg'
import S4 from '@/Components/Images/Services/4.jpg'
import ScrollToTop from '@/Components/ScrollToTop'
import Link from 'next/link'


export default function Services() {
    // Service data with URLs for each service page
    const serviceData = [
        {
            title: "The Drainage",
            description: "Appropriate drainage is sometimes disregarded, yet it may prevent your backyard from becoming a wet mess!",
            image: '/assets/Services/1.jpg',
            url: '/ServicesPage/TheDrainage'

        },
        {
            title: "Color Bond Fencing",
            description: "We take great pride in installing gates and fences that are level and straight! Most of the time, in order to keep the fence level, part of it has to have retaining boards placed beneath it.",
            image: '/assets/Services/2.jpg',
            url: "/ServicesPage/ColorbondFencing"
        },
        {
            title: "Artificial & Natural Grass",
            description: "Are you tired of constantly maintaining your lawn? Whether it's mowing, watering, or other maintenance tasks, we offer solutions with both natural and artificial options.",
            image: '/assets/Services/3.jpg',
            url: "/ServicesPage/Artificial&Naturalgrass"
        },
        {
            title: "Structural Retaining Wall",
            description: "For your retaining wall needs, we can provide a wide range of alternatives.",
            image: '/assets/Services/4.jpg',	
            url: "/ServicesPage/StructuralRetainingwall"
        },
        {
            title: "Composite Decking",
            description: "You may install this incredibly durable product on concrete or on a floating frame. Available in various colors and depths to meet your needs.",
            image: '/assets/Services/5.jpg',
            url: "/ServicesPage/CompositeDecking"
        },
        {
            title: "Excavation",
            description: "In order to level the ground, build drainage, or do a mix of these tasks, most conversions need some sort of excavation or soil addition.",
            image: '/assets/Services/6.jpg',	
            url: "/ServicesPage/Excavation"
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
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl flex flex-col h-full">
                            <div className="relative h-56 w-full">
                                <Image 
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-green-900 mb-2">{service.title}</h3>
                                <div className="w-16 h-0.5 bg-green-500 mb-4"></div>
                                <p className="text-gray-600 text-justify mb-4 flex-grow">{service.description}</p>
                                <div className="mt-auto">
                                    <Link href={service.url}>
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
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