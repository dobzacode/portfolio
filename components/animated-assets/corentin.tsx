'use client';

import nameAnimation from '@/assets/lottie/corentin-kittel.json';

import { LottieOptions, useLottie } from 'lottie-react';

export default function Corentin() {
  const options: LottieOptions = {
    animationData: nameAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  if (sessionStorage.getItem('corentin')) {
    return null;
  }

  myAnimation.setSpeed(1.3);

  if (!sessionStorage.getItem('shown')) {
    myAnimation.pause();
    setTimeout(() => {
      myAnimation.play();
    }, 4500);
  }

  setTimeout(() => {
    myAnimation.destroy();
    sessionStorage.setItem('corentin', 'true');
  }, 10500);

  return <div className="absolute -top-medium z-50">{myAnimation.View}</div>;
}
