import Image from 'next/image';
import C1 from '@/Components/Images/Contact/1.jpg';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import FormHandling from '@/Components/FormHandling';
import ScrollToTop from '@/Components/ScrollToTop';

const Contact = () => {
   
   

    return (
        <>
        
        <ScrollToTop/>
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side - Images */}
                <div className="lg:w-1/2">
                    <div className="mb-4">
                        <Image
                            src={C1}
                            alt="Succulent plant in grey pot"
                            className="object-cover object-center h-64 shadow-lg shadow-gray-950 md:h-[650px] w-full"
                        />
                    </div>
                </div>

                {/* Right side - Contact form */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-start text-center md:text-5xl font-medium text-gray-800 mb-6">CONTACT</h2>
                    <div className="w-60 h-0.5 flex justify-center mx-auto md:justify-start md:mx-0 bg-[#37b629] mb-6"></div>

                    <p className="text-gray-600 mb-6">
                        Please fill out the contact form with your requirements and
                        we will get back to you as soon as possible.
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span className="text-gray-700">0410 654 941</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span className="text-gray-700">West Pennant Hills, NSW 2125 Australia</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                            <span className="text-gray-700">ABN: 38 603 815 630</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                            </svg>
                            <span className="text-gray-700">Licence Number: 282086C</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex md:justify-start justify-center gap-8 mb-6">
                        <a href="#" className="text-[#2a7d2e] hover:text-[#37b629] transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-[#2a7d2e] hover:text-[#37b629] transition">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-[#2a7d2e] hover:text-[#37b629] transition">
                            <FaYoutube size={24} />
                        </a>
                        <a href="#" className="text-[#2a7d2e] hover:text-[#37b629] transition">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
<FormHandling/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;