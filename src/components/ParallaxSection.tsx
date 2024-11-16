import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
}

export function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -offset]);

  return (
    <motion.div style={{ y }} className="relative will-change-transform">
      {children}
    </motion.div>
  );
}