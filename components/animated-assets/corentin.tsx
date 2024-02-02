'use client';

import nameAnimation from '@/assets/lottie/corentin-kittel.json';

import { LottieOptions, useLottie } from 'lottie-react';
import { useEffect } from 'react';

export default function Corentin({ className }: { className: string }) {
  const options: LottieOptions = {
    animationData: nameAnimation,
    loop: false
  };

  const myAnimation = useLottie(options);

  myAnimation.setSpeed(1.3);
  myAnimation.pause();

  useEffect(() => {
    // Démarrer l'animation après 3000 millisecondes (3 secondes)
    const playTimeout = setTimeout(() => {
      myAnimation.play();
    }, 3000);

    // Mettre en pause l'animation après 7150 millisecondes (7.15 secondes)
    const pauseTimeout = setTimeout(() => {
      myAnimation.pause();
    }, 7150);

    // Nettoyer les timeouts lorsque le composant est démonté
    return () => {
      clearTimeout(playTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [myAnimation]);

  return <div className={className}>{myAnimation.View}</div>;
}
