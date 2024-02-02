'use client';

import { motion } from 'framer-motion';

export default function AnimatedLogo({
  className,
  splashDelay
}: {
  className: string;
  splashDelay: number;
}) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: splashDelay + 1 } }}
      className={`${className} overflow-visible fill-primary90 dark:fill-primary1`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268.8 280"
    >
      <title>CK</title>
      <g id="Calque_2" data-name="Calque 2">
        <g id="Calque_1-2" data-name="Calque 1">
          <motion.path
            initial={{ x: '-10%', y: '10%', rotate: '10deg' }}
            animate={{
              x: '0%',
              y: 0,
              rotate: 0,
              transition: { type: 'spring', delay: splashDelay + 1 }
            }}
            d="M0,0H118.4V20H24.8V260h93.6v20H0Z"
          />
          <motion.path
            initial={{ x: '10%', y: '-10%', rotate: '-10deg' }}
            animate={{
              x: '0%',
              y: 0,
              rotate: 0,
              transition: { type: 'spring', delay: splashDelay + 1 }
            }}
            d="M244,150.4H175.2V280H150.4V0h24.8V126.4h25.2L242.8,0h26L226.4,126.4h42.4V280H244Z"
          />
        </g>
      </g>
    </motion.svg>
  );
}
