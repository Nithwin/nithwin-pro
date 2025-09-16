// src/components/Header.js

"use client"; // REQUIRED: This component uses hooks for interactivity.

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // A helper function to create nav links
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
      <Link href={href}>
        <div className="text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          {children}
        </div>
      </Link>
    </li>
  );
  
  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header className='fixed top-0 left-0 w-full backdrop-blur-lg z-50 lg:p-3'>
        <nav className='container mx-auto px-6 py-2 flex justify-between items-center'>
          {/* Logo */}
          <Link href="/">
            <Image 
              alt='logo' 
              src={"/header_logo.png"} // Assuming logo path
              className='w-40 md:w-48'
              width={192} 
              height={40} 
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className='hidden md:flex items-center space-x-8 text-lg font-semibold text-gray-300'>
            <NavLink href="/app">App</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/build">Build</NavLink>
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/about">About</NavLink>
            <li>
              <button className='bg-transparent cursor-pointer border-2 border-cyan-500 text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-cyan-500/20 transition-colors'>
                Enter App
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white focus:outline-none z-50' // Ensure button is on top
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#141B30] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col items-center justify-center h-full'>
          <ul className='space-y-8 text-center text-gray-300 font-semibold text-2xl'>
            {/* Add onClick to close menu on navigation */}
            <li onClick={() => setIsOpen(false)}><Link href="/app">App</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/products">Products</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/build">Build</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/careers">Careers</Link></li>
            <li onClick={() => setIsOpen(false)}><Link href="/about">About</Link></li>
            <li className='pt-6' onClick={() => setIsOpen(false)}>
              <button className='bg-transparent cursor-pointer border-2 border-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-xl hover:bg-cyan-500/20 transition-colors'>
                Enter App
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;