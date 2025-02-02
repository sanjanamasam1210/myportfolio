'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface BentoGridProps {
  images?: string[];
}

const BentoGrid = ({ images = [] }: BentoGridProps) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    width: number;
    height: number;
  } | null>(null);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            onClick={(e) => {
              const imgElement = e.currentTarget.querySelector('img');
              if (imgElement) {
                setSelectedImage({
                  src: img,
                  width: imgElement.naturalWidth,
                  height: imgElement.naturalHeight
                });
              }
            }}
          >
            <Image
              src={img}
              alt={`Project image ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onLoadingComplete={(img) => img.parentElement?.classList.remove('opacity-0')}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-lg font-medium">Click to Expand</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              style={{
                aspectRatio: selectedImage.width / selectedImage.height
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt="Expanded view"
                width={selectedImage.width}
                height={selectedImage.height}
                className="rounded-lg shadow-xl object-contain"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto'
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 bg-white/90 text-black rounded-full p-2 hover:bg-white transition-colors shadow-lg"
              >
                <FiX className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BentoGrid;
