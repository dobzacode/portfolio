'use client';

import nameDarkAnimation from '@/assets/lottie/ck-dark.json';
import nameAnimation from '@/assets/lottie/ck.json';
import { LottieOptions, useLottie } from 'lottie-react';

export default function CK({ className, isDark }: { className?: string; isDark?: boolean }) {
  const options: LottieOptions = {
    animationData: !isDark ? nameAnimation : nameDarkAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  myAnimation.pause();

  setTimeout(() => {
    myAnimation.play();
  }, 4500);

  return <div className={className}>{myAnimation.View}</div>;
}
