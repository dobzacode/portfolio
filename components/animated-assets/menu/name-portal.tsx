'use client';

import { LottieOptions, useLottie } from 'lottie-react';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

const NamePortal = forwardRef(
  (
    { className, text }: { className?: string; text: string | null },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const animationData = require(`@/assets/lottie/portal/${text}.json`);

    const options: LottieOptions = {
      animationData: animationData,
      loop: false
    };

    const animation = useLottie(options);

    const [trigger, setTrigger] = useState<number>(0);

    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (animationRef.current) {
        animationRef.current.style.top = `${Math.random() * 500}px`;
      }
    }, [animationRef, text, trigger]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setTrigger((trigger) => trigger + 1);
      }, 6000);
      return () => clearTimeout(timeout);
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
        ref={ref}
      >
        <div
          className="absolute top-0 [&>div>svg>g>g>g>g>g>g>path]:dark:fill-white [&>div>svg>g>g>g>g>g>path]:dark:fill-white"
          ref={animationRef}
        >
          {animation.View}
        </div>
      </motion.div>
    );
  }
);

NamePortal.displayName = 'NamePortal';

export default NamePortal;
