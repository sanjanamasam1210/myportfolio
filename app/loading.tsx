'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const dateTimeInterval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(dateTimeInterval);
    };
  }, []);

  const formatDateTime = (date:Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };

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
          {/* Date and Time Display */}
          <motion.div
            className="absolute top-4 right-4 text-primary text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {formatDateTime(currentDateTime)}
          </motion.div>

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
