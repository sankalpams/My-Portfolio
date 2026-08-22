import React from 'react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollSection3DProps {
  children: ReactNode;
  className?: string;
  variant?: 'rise' | 'tiltLeft' | 'tiltRight' | 'scale' | 'none';
  offsetY?: number;
  rotationDeg?: number;
}

export const ScrollSection3D: React.FC<ScrollSection3DProps> = ({
  children,
  className = '',
  variant = 'rise',
  offsetY = 24,
}) => {
  if (variant === 'none') {
    return <div className={className}>{children}</div>;
  }

  const getInitial = () => {
    switch (variant) {
      case 'tiltLeft':
        return { opacity: 0, y: offsetY, x: -12 };
      case 'tiltRight':
        return { opacity: 0, y: offsetY, x: 12 };
      case 'scale':
        return { opacity: 0, scale: 0.98, y: offsetY };
      case 'rise':
      default:
        return { opacity: 0, y: offsetY };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Quintic buttery ease-out curve
      }}
      className={className}
      style={{ 
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </motion.div>
  );
};
