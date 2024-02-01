'use client';

import nameAnimation from '@/assets/lottie/corentin-kittel.json';
import { hasCookie, setCookie } from 'cookies-next';
import { LottieOptions, useLottie } from 'lottie-react';

export default function Corentin() {
  const options: LottieOptions = {
    animationData: nameAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  if (hasCookie('corentin')) {
    return null;
  }

  myAnimation.setSpeed(1.3);

  setTimeout(() => {
    myAnimation.destroy();
    setCookie('corentin', 'true');
  }, 6000);

  return <div className="absolute -top-medium z-50">{myAnimation.View}</div>;
}
