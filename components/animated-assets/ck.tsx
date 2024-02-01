'use client';

import nameAnimation from '@/assets/lottie/ck.json';
import { LottieOptions, useLottie } from 'lottie-react';

export default function CK({ className }: { className?: string }) {
  const options: LottieOptions = {
    animationData: nameAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  myAnimation.setSpeed(1.3);

  return <div className={className}>{myAnimation.View}</div>;
}
