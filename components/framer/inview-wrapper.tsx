'use client';

import { MotionStyle, Variants, motion } from 'framer-motion';

export default function InviewWrapper({
  style,
  variant,
  children,
  className,
  viewport = { once: true, margin: '0px 0px 5% 0px' },
  inverseOnExit,
  id,
  tag = 'div',
  noExit,
  whileHover,
  ref,
  onViewportEnter
}: {
  style?: MotionStyle | undefined;
  variant: Variants | undefined;
  children?: React.ReactNode;
  className?: string;
  viewport?: any;
  inverseOnExit?: boolean;
  id?: string;
  tag?: string;
  noExit?: boolean;
  whileHover?: any;
  ref?: any;
  onViewportEnter?: any;
}) {
  //@ts-expect-error tag is a string
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      onViewportEnter={onViewportEnter}
      ref={ref}
      id={id}
      style={style}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={className}
      variants={variant}
      viewport={viewport}
      whileInView="animate"
      initial="initial"
      whileHover={whileHover}
      exit={() => {
        if (noExit) return;
        return inverseOnExit ? 'exit' : 'initial';
      }}
    >
      {children}
    </MotionComponent>
  );
}
