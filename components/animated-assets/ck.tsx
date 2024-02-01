'use client';

import nameDarkAnimation from '@/assets/lottie/ck-dark.json';
import nameAnimation from '@/assets/lottie/ck.json';
import { LottieOptions, useLottie } from 'lottie-react';

export default function CK({
  className,
  isDark,
  extraDelay
}: {
  className?: string;
  isDark?: boolean;
  extraDelay: number;
}) {
  const options: LottieOptions = {
    animationData: !isDark ? nameAnimation : nameDarkAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  if (extraDelay === 2) return <div className={className}>{myAnimation.View}</div>;

  myAnimation.pause();

  setTimeout(() => {
    myAnimation.play();
  }, 4500);

  return <div className={className}>{myAnimation.View}</div>;
}
