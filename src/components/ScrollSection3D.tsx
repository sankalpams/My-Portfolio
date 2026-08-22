import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  offsetY = 50,
  rotationDeg = 3,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Much softer spring: lower stiffness = slower & smoother, higher damping = less bounce
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.0005,
  });

  // Gentler opacity: start partially visible so sections don't "pop" from invisible
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.5], [0.15, 0.6, 1]);

  // Softer vertical movement
  const translateY = useTransform(smoothProgress, [0, 0.5], [offsetY, 0]);
  const translateY_small = useTransform(smoothProgress, [0, 0.5], [25, 0]);
  const translateY_medium = useTransform(smoothProgress, [0, 0.5], [30, 0]);

  // Gentler horizontal slides
  const translateX_left = useTransform(smoothProgress, [0, 0.5], [-30, 0]);
  const translateX_right = useTransform(smoothProgress, [0, 0.5], [30, 0]);

  // Subtle rotations
  const rotateX = useTransform(smoothProgress, [0, 0.5], [rotationDeg, 0]);
  const rotateY_left = useTransform(smoothProgress, [0, 0.5], [rotationDeg * 0.6, 0]);
  const rotateY_right = useTransform(smoothProgress, [0, 0.5], [-rotationDeg * 0.6, 0]);

  // Scale starts closer to 1 for subtlety
  const scaleVal = useTransform(smoothProgress, [0, 0.5], [0.94, 1]);

  if (variant === 'none') {
    return <div className={className}>{children}</div>;
  }

  let style: Record<string, unknown>;
  switch (variant) {
    case 'tiltLeft':
      style = {
        opacity,
        x: translateX_left,
        y: translateY_small,
        rotateY: rotateY_left,
        transformPerspective: 1400,
      };
      break;
    case 'tiltRight':
      style = {
        opacity,
        x: translateX_right,
        y: translateY_small,
        rotateY: rotateY_right,
        transformPerspective: 1400,
      };
      break;
    case 'scale':
      style = {
        opacity,
        scale: scaleVal,
        y: translateY_medium,
        transformPerspective: 1400,
      };
      break;
    case 'rise':
    default:
      style = {
        opacity,
        y: translateY,
        rotateX,
        transformPerspective: 1400,
      };
      break;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        willChange: 'transform, opacity',
        transformOrigin: 'center bottom',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
