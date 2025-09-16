"use client"; // Add this line if you are using Next.js 13+ App Router

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link"; // Use Next.js Link for client-side navigation

const Header = () => {
  // State to manage whether the mobile menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // A helper function to create nav links
  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset the style when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full backdrop-blur-lg z-50 p-4">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                alt="logo"
                src={"/header_logo.png"}
                className="w-40 md:w-48" // Adjusted size for different screens
                width={500}
                height={500}
                priority // Good for LCP
              />
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/20 blur-[120px]"></div>
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8 text-lg text-[#7c859f]">
            <NavLink href="/app">App</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/build">Build</NavLink>
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/about">About</NavLink>
            <li>
              <button className="bg-transparent border-2 border-cyan-600  text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-cyan-600 ">
                Enter App
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button (Hamburger/Cross) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-8">
                {/* Hamburger Icon */}
                <HiMenu
                  className={`text-[#677fff] absolute w-10 h-10 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                {/* Cross Icon */}
                <HiX
                  className={`text-[#677fff] absolute w-10 h-10 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {/* This slides in from the left */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* The links are centered vertically and horizontally */}
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-5 text-center text-[#7c859f] font-semibold text-xl">
            <li onClick={() => setIsOpen(false)}>
              <Link href="/app">
                <div className=" ">App</div>
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/products">
                <div className=" ">Products</div>
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/build">
                <div className=" ">Build</div>
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/careers">
                <div className="">Careers</div>
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href="/about">
                <div className="">About</div>
              </Link>
            </li>
            <li className="pt-4" onClick={() => setIsOpen(false)}>
              <button className="bg-transparent border-2 border-cyan-600  text-white px-8 py-3 rounded-full font-semibold text-xl hover:bg-cyan-600 ">
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
