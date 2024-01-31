'use client';

import nameAnimation from '@/assets/lottie/corentin-kittel.json';
import { useLottie } from 'lottie-react';

export default function Corentin() {
  const options = {
    animationData: nameAnimation
  };

  const { View } = useLottie(options);

  return <div className="-mt-large">{View}</div>;
}
