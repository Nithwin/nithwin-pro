// src/components/SwapSection.js
// "use client"; // Potentially needed if you add interactive logic later

import React from 'react';
import Image from 'next/image';
import { FaChevronDown, FaArrowDown, FaInfoCircle, FaArrowRight } from 'react-icons/fa';

const SwapSection = () => {
  return (
    <section className="bg-[#1C2037] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">

        
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#7B50E8] via-[#388DF3] to-[#4DBBD6] bg-clip-text text-transparent">
              Swap
            </span> <br />
            Any Token, <br />
            Any Chain
          </h2>
          <p className="text-gray-400 text-sm lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            THORSwap's DEX Aggregator connects liquidity across 9
            blockchains and compares pricing from numerous
            Aggregators (1inch, Matcha) & DEXs (Uniswap, Sushiswap,
            Pangolin) to give you the best cross-chain swap in one
            click.
          </p>
          <button className="bg-[#4DBBD6] text-white font-semibold py-4 px-10 rounded-full text-sm lg:text-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
            Start Swapping
          </button>
        </div>

        
        <div className="max-w-lg mx-auto w-full h-full">
          <video 
          className='rounded-3xl'
          autoPlay
          loop
          muted
          src={"landing_page_swap_v2.mp4"} poster='swap.jpg'>
          </video>
    
        </div>

      </div>
    </section>
  );
};

export default SwapSection;