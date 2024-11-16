'use client';

import { buttonVariants } from '@/components/ui/button';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const searchParams = useSearchParams();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className={`duration-slowest ${
        searchParams.get('menu') ? 'translate-x-[50%] opacity-0 ' : 'opacity-100 delay-1000'
      }`}
    >
      <motion.section
        initial={{ x: '-50%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            x: { duration: 2, type: 'spring', delay: splashDelay },
            opacity: { duration: 1, delay: splashDelay }
          }
        }}
        exit={{ opacity: 0, x: '50%', transition: { duration: 1.5 } }}
        className="flex h-[75vh] w-full flex-col items-center justify-center gap-medium px-small text-tertiary90 dark:text-tertiary5 "
      >
        <h1 className="heading--extra-large leading-heading-sub-extra-large">500</h1>
        <p className="body max-w-[400px] text-pretty text-center">
          Une erreur est survenue, veuillez réessayer plus tard.
        </p>
        <Link
          className={buttonVariants({ size: 'small', rounded: 'small', intent: 'pastelNeutral' })}
          href="/"
        >
          Retour à la page d&apos;accueil
        </Link>
      </motion.section>
    </div>
  );
}
