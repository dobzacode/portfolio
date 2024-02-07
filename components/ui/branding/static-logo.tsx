'use client';

import { motion } from 'framer-motion';

export default function StaticLogo({ className }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, x: '50%' }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: 0,
        transition: { opacity: { duration: 6, times: [0, 0.1, 0.75, 1] }, x: { duration: 1 } }
      }}
      className={`${className} overflow-visible fill-primary90 dark:fill-primary1`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268.8 280"
    >
      <title>CK</title>
      <g id="Calque_2" data-name="Calque 2">
        <g id="Calque_1-2" data-name="Calque 1">
          <path d="M0,0H118.4V20H24.8V260h93.6v20H0Z" />
          <path d="M244,150.4H175.2V280H150.4V0h24.8V126.4h25.2L242.8,0h26L226.4,126.4h42.4V280H244Z" />
        </g>
      </g>
    </motion.svg>
  );
}
