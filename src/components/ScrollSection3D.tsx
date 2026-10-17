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
  offsetY = 16,
}) => {
  if (variant === 'none') {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -30px 0px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
