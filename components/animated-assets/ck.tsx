'use client';

import nameDarkAnimation from '@/assets/lottie/ck-dark.json';
import nameAnimation from '@/assets/lottie/ck.json';
import { LottieOptions, useLottie } from 'lottie-react';
import { useEffect } from 'react';

export default function CK({
  className,
  isDark,

  splashDelay
}: {
  className?: string;
  isDark?: boolean;

  splashDelay: number;
}) {
  const options: LottieOptions = {
    animationData: !isDark ? nameAnimation : nameDarkAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  myAnimation.pause();

  useEffect(() => {
    const timerId = setTimeout(() => {
      myAnimation.play();
    }, splashDelay * 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [myAnimation, splashDelay]);

  return <div className={className}>{myAnimation.View}</div>;
}
