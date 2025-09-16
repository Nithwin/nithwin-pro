'use client';

import React, { useState, useEffect } from 'react';

// Define the props the component will accept
interface VerticalCarouselProps {
  words: string[];
  duration?: number;
  className?: string;
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  words,
  duration = 2000, // Default duration is 2 seconds
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  // Set the height for each item. text-2xl is h-8 (2rem) in Tailwind.
  const itemHeight = 'h-8'; 

  return (
    <div className={`relative ${itemHeight} overflow-hidden`}>
      <div
        className="w-full transition-transform duration-700 ease-in-out"
        // --- THIS IS THE FIX ---
        // We now translate by a specific REM value that matches the item height,
        // ensuring it slides up by exactly one word at a time.
        style={{ transform: `translateY(-${currentIndex * 2}rem)` }}
      >
        {words.map((word, index) => (
          <div key={index} className={`flex items-center justify-start ${itemHeight}`}>
            {/* The className prop with font and gradient styles is applied here */}
            <span className={className}>{word}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;