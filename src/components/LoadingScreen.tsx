import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 4000;
    const interval = 10;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsVisible(false);
        setTimeout(onLoadingComplete, 1000);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          <div className="relative w-48 h-48">
            {/* Background pulse effect */}
            <motion.div
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 bg-black/10 rounded-full"
            />

            {/* Logo container */}
            <div className="absolute inset-0">
              {/* Outer rotating border */}
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-black/20 rounded-lg transform rotate-3"
              />
              
              {/* Inner rotating border */}
              <motion.div
                initial={{ rotate: 0, scale: 0.95 }}
                animate={{ rotate: -360, scale: 0.95 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-black/40 rounded-lg transform -rotate-3"
              />

              {/* Logo letter */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-5xl font-bold text-black">K</span>
              </motion.div>

              {/* Animated dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute -right-1 -top-1 w-3 h-3 bg-black rounded-full"
              />
            </div>

            {/* Progress bar */}
            <div className="absolute -bottom-12 w-48 h-1 bg-black/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="h-full bg-black rounded-full"
              />
            </div>

            {/* Progress text */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-sm font-medium text-black/60">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}