'use client';

import { motion, type MotionStyle } from 'framer-motion';
import React from 'react';

export default function DivWrapper({
  children,
  className,
  tag = 'div',
  style,
  initial,
  exit,
  animate,
  custom
}: {
  children?: React.ReactNode;
  className?: string;
  tag?: string;
  style?: MotionStyle | undefined;
  custom?: number;
  initial: unknown;
  exit?: unknown;
  animate: unknown;
}) {
  //@ts-expect-error  framer-motion types are incorrect
  const MotionComponent = motion[tag || 'div'] as unknown as typeof motion.div;

  return (
    <MotionComponent
      custom={custom}
      style={style}
      className={className}
      transition={{ duration: 1, ease: 'easeInOut' }}
      //@ts-ignore
      initial={initial}
      //@ts-ignore
      exit={exit || undefined}
      //@ts-ignore
      animate={animate}
    >
      {children}
    </MotionComponent>
  );
}
