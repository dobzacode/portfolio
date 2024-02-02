'use client';

import nameDarkAnimation from '@/assets/lottie/ck-dark.json';
import nameAnimation from '@/assets/lottie/ck.json';
import { LottieOptions, useLottie } from 'lottie-react';

export default function MovingLogo({
  className,
  isDark
}: {
  className?: string;
  isDark?: boolean;
}) {
  const options: LottieOptions = {
    animationData: !isDark ? nameAnimation : nameDarkAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  myAnimation.setSpeed(1.5);

  setTimeout(() => {
    myAnimation.setDirection(-1);
    myAnimation.play();
  }, 3000);

  return <div className={className}>{myAnimation.View}</div>;
}
