"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // We are using the Image component as requested
import { TypeAnimation } from "react-type-animation";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import VerticalCarousel from "@/components/VerticalCarousel";


const svgIcons = [
  "/btc.svg",
  "/eth.svg",
  "/bnb.svg",
  "/rune.svg",
  "/cosmos.svg",
  "/avax.svg",
  "/bch.svg",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % svgIcons.length);
    }, 2000); // 2000 milliseconds = 2 seconds
    return () => clearInterval(interval);
  }, []); 

  return (
    <section className="relative pt-[6rem] lg:pt-[8rem] h-screen w-full overflow-hidden flex justify-center text-center bg-transparent">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full  object-cover z-2"
        src="/landing_page_3.mp4"
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10" /> */}

      <div className="relative z-10 flex flex-col items-center px-4 space-y-8">
        <h1 className="font-clash text-3xl md:text-7xl font-semibold text-white tracking-wide">
          The
          <span className="bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] bg-clip-text text-transparent">
            Decentralized
          </span>{" "}
          Cross-chain <br /> Exchange
        </h1>

        <div className="flex items-center justify-center space-x-4">
          {svgIcons.map((iconPath, index) => (
            <Image
              key={index}
              src={iconPath}
              alt={iconPath.split("/")[1].split(".")[0]}
              width={24}
              height={24}
              className={`
            transition-all duration-500 
            ${activeIndex === index ? "filter-none" : "brightness-50 "}
            hover:filter-none 
          `}
            />
          ))}
        </div>

       
<div className="text-xl md:text-3xl text-gray-200 space-y-2 font-bold text-center">
  <p className="leading-relaxed lg:flex lg:items-center lg:gap-2"> 
    One click Swap & Earn on <span className="underline">Native</span>{' '}
    <VerticalCarousel
      words={["Bitcoin", "Ethereum", "THORChain", "Cosmos"]}
      className="inline-block mx-auto lg:m-0 align-middle text-lg lg:text-2xl bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] bg-clip-text text-transparent"
    />
  </p>
  <p className="leading-relaxed flex items-center text-2xl justify-center lg:gap-2 mx-auto text-center w-full">
    own your{' '}
    <VerticalCarousel
      words={["Keys", "Coins", "Wallets", "Assets"]}
      className="inline-block mx-auto lg:m-0 align-middle bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] bg-clip-text text-transparent"
    />
  </p>
</div>
        <div className="relative w-full max-w-lg bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] p-[0.1rem] rounded-full">
          <input
            type="search"
            placeholder="Search 5,000+ tokens across 9 Chains...|"
            className="w-full py-4 pl-6 pr-14 rounded-full bg-gray-900 placeholder:font-bold  backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none"
          />
          <FiSearch className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        <div>
          <button className="text-white cursor-pointer font-semibold text-lg py-3 px-10 rounded-full bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] hover:opacity-90 transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-black/60">
            Start Swapping
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white text-sm z-10">
        <p>Learn More</p>
        <FiChevronDown className="w-6 h-6 animate-bounce" />
      </div>

      <div className="absolute bottom-[6rem] right-1/5 flex items-center space-x-7 text-xl z-10 bg-gray-800 px-5 py-4 rounded-full text-cyan-600">
        <a href="#" className="hover:text-blue-400 transition-colors">
          <FaDiscord />
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          <FaYoutube />
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          <FaMedium />
        </a>
      </div>
    </section>
  );
};

export default Hero;
