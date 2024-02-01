'use client';

import nameAnimation from '@/assets/lottie/corentin-kittel.json';
import { LottieOptions, useLottie } from 'lottie-react';

export default function Corentin() {
  const options: LottieOptions = {
    animationData: nameAnimation,
    loop: false
  };

  const { View } = useLottie(options);

  return <div className="absolute -top-medium">{View}</div>;
}
