'use client';

import corentinAnimation from '@/assets/lottie/current-corentin.json';
import kittelAnimation from '@/assets/lottie/current-kittel.json';
import { LottieOptions, useLottie } from 'lottie-react';
import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

export default function AccueilCurrent({ className }: { className?: string }) {
  const [isTimeout, setIsTimeout] = useState<boolean>(true);

  const options1: LottieOptions = {
    animationData: corentinAnimation,
    loop: true
  };

  const options2: LottieOptions = {
    animationData: kittelAnimation,
    loop: true
  };

  const layer1 = useLottie(options1);
  const layer2 = useLottie(options2);

  const corentinRef = useRef<HTMLDivElement>(null);
  const kittelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(layer1.getDuration());
    const rotateInterval = setInterval(() => {
      if (corentinRef.current) {
        corentinRef.current.style.top = `${Math.random() * 500}px`;
      }
      if (kittelRef.current) {
        kittelRef.current.style.left = `${Math.random() * 500}px`;
      }
    }, 12000);
    return () => {
      clearInterval(rotateInterval);
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 1],
        transition: {
          times: [0, 0.99, 1],
          duration: 6.5
        }
      }}
      className={className}
    >
      <div className="absolute top-0 [&>div>svg>g>g>g>g>g>path]:dark:fill-white" ref={corentinRef}>
        {layer1.View}
      </div>
      <div
        className="absolute -top-large left-1/2 [&>div>svg>g>g>g>g>g>path]:dark:fill-white"
        ref={kittelRef}
      >
        {layer2.View}
      </div>
    </motion.div>
  );
}
