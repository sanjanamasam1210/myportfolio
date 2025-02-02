'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Changed import

export default function Loading() {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    // Only show loader on initial homepage load
    if (pathname !== '/') {
      setIsLoading(false);
      return;
    }

    const hasLoaded = localStorage.getItem('hasLoaded');
    if (!hasLoaded) {
      const interval = setInterval(() => {
        setPercentage(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
              localStorage.setItem('hasLoaded', 'true');
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    } else {
      setIsLoading(false);
    }
  }, [pathname]); // Add pathname to dependencies

  if (!isLoading) return null;

  return (
    <div className='bg-[#f6ede4]'>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.2,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            {/* Loading Circles */}
            <div className="relative w-[40vw] h-[40vw] max-w-64 max-h-64">
              <motion.div
                className="absolute inset-0 border-4 border-l-transparent border-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              />
              
              <motion.div
                className="absolute inset-0 border-4 border-r-transparent border-secondary rounded-full"
                style={{ scale: 0.7 }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />

              <motion.span 
                className="absolute inset-0 flex items-center justify-center text-4xl font-medium text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {percentage}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
