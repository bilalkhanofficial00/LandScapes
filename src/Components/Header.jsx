'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../Components/Images/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if the current path matches the link
  const isActive = (path) => pathname === path;

  return (
    <header className="w-full z-50 bg-white lg:shadow-none shadow-md relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 relative">
        <div className="">
          <Link href="/">
            <Image src={Logo} alt='Logo' height={300} width={300} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex text-gray-800 space-x-12">
            <li className="py-2">
              <Link 
                href="/Projects" 
                className={`
                  hover:text-[#37b629] 
                  pb-1 
                  transition-all 
                  duration-300 
                  ${isActive('/Projects') 
                    ? 'border-b-2 border-[#37b629] text-[#37b629]' 
                    : 'hover:border-b-2 hover:border-[#2a7d2e]'}
                `}
              >
                PROJECTS
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/OurTeam" 
                className={`
                  hover:text-[#37b629] 
                  pb-1 
                  transition-all 
                  duration-300 
                  ${isActive('/OurTeam') 
                    ? 'border-b-2 border-[#37b629] text-[#37b629]' 
                    : 'hover:border-b-2 hover:border-[#2a7d2e]'}
                `}
              >
                OUR TEAM
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/Services" 
                className={`
                  hover:text-[#37b629] 
                  pb-1 
                  transition-all 
                  duration-300 
                  ${isActive('/Services') 
                    ? 'border-b-2 border-[#37b629] text-[#37b629]' 
                    : 'hover:border-b-2 hover:border-[#2a7d2e]'}
                `}
              >
                SERVICES
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/JOURNAL" 
                className={`
                  hover:text-[#37b629] 
                  pb-1 
                  transition-all 
                  duration-300 
                  ${isActive('/JOURNAL') 
                    ? 'border-b-2 border-[#37b629] text-[#37b629]' 
                    : 'hover:border-b-2 hover:border-[#2a7d2e]'}
                `}
              >
                JOURNAL
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/About" 
                className={`
                  hover:text-[#37b629] 
                  pb-1 
                  transition-all 
                  duration-300 
                  ${isActive('/About') 
                    ? 'border-b-2 border-[#37b629] text-[#37b629]' 
                    : 'hover:border-b-2 hover:border-[#2a7d2e]'}
                `}
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link 
            href="/Contact" 
            className={`
              bg-[#2a7d2e] 
              text-white 
              px-4 
              tracking-wider
              py-2 
              rounded 
              hover:bg-gray-800
              transition-colors
              ${isActive('/Contact') ? 'bg-[#37b629]' : ''}
            `}
          >
            GET IN TOUCH
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl md:text-3xl z-60 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            absolute 
            z-50
            transform 
            transition-all 
            duration-500 
            ease-in-out 
            top-full 
            left-0 
            w-full 
            bg-white 
            shadow-md 
            lg:hidden
            origin-top
            ${menuOpen 
              ? "scale-y-100 opacity-100" 
              : "scale-y-0 opacity-0"
            }
          `}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {[
              { href: "/Projects", label: "PROJECTS" },
              { href: "/OurTeam", label: "OUR TEAM" },
              { href: "/Services", label: "SERVICES" },
              { href: "/JOURNAL", label: "JOURNAL" },
              { href: "/About", label: "ABOUT US" },
            ].map((item) => (
              <li 
                key={item.href}
                className={`
                  transition-all 
                  duration-300 
                  ${isActive(item.href) ? 'text-[#2a7d2e]' : 'hover:text-[#37b629]'}
                `}
              >
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/Contact" 
                className={`
                  ${isActive('/Contact') 
                    ? 'bg-[#2a7d2e]' 
                    : 'bg-[#2a7d2e] hover:bg-gray-800'}
                  text-white 
                  px-2 
                  tracking-wider
                  py-[4px] 
                  my-2 
                  rounded
                `}
                onClick={() => setMenuOpen(false)}
              >
                GET IN TOUCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}