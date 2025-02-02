'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ScrollProgressButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDistance = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / scrollDistance) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link href="/">
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full shadow-lg flex items-center justify-center cursor-pointer">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * scrollProgress) / 100}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute w-12 h-12 rounded-full flex items-center justify-center font-clash-display-medium text-lg">
          SM
        </div>
      </div>
    </Link>
  );
};

export default ScrollProgressButton;
