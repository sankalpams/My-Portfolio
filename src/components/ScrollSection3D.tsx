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
  offsetY = 80,
  rotationDeg = 6,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.2'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // All transforms are declared unconditionally (Rules of Hooks)
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const translateY = useTransform(smoothProgress, [0, 1], [offsetY, 0]);
  const translateY_small = useTransform(smoothProgress, [0, 1], [40, 0]);
  const translateY_medium = useTransform(smoothProgress, [0, 1], [50, 0]);
  const translateX_left = useTransform(smoothProgress, [0, 1], [-60, 0]);
  const translateX_right = useTransform(smoothProgress, [0, 1], [60, 0]);
  const rotateX = useTransform(smoothProgress, [0, 1], [rotationDeg, 0]);
  const rotateY_left = useTransform(smoothProgress, [0, 1], [rotationDeg, 0]);
  const rotateY_right = useTransform(smoothProgress, [0, 1], [-rotationDeg, 0]);
  const scaleVal = useTransform(smoothProgress, [0, 1], [0.88, 1]);

  if (variant === 'none') {
    return <div className={className}>{children}</div>;
  }

  // Pick the right style based on variant
  let style: Record<string, unknown>;
  switch (variant) {
    case 'tiltLeft':
      style = {
        opacity,
        x: translateX_left,
        y: translateY_small,
        rotateY: rotateY_left,
        transformPerspective: 1200,
      };
      break;
    case 'tiltRight':
      style = {
        opacity,
        x: translateX_right,
        y: translateY_small,
        rotateY: rotateY_right,
        transformPerspective: 1200,
      };
      break;
    case 'scale':
      style = {
        opacity,
        scale: scaleVal,
        y: translateY_medium,
        transformPerspective: 1200,
      };
      break;
    case 'rise':
    default:
      style = {
        opacity,
        y: translateY,
        rotateX,
        transformPerspective: 1200,
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
