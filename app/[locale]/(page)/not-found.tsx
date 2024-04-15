'use client';

import { buttonVariants } from '@/components/ui/button/button';
import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function NotFound() {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const t = useTranslations('not-found');

  const searchParams = useSearchParams();

  return (
    <div
      className={`duration-slowest ${
        searchParams.get('menu') ? 'translate-x-[50%] opacity-0 ' : 'opacity-100 delay-1000'
      }`}
    >
      <motion.main
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
        className="flex h-[75vh] w-full flex-col items-center justify-center gap-medium px-small text-primary90 dark:text-primary5"
      >
        <H1 textType="heading--extra-large">404</H1>
        <P textType="body" className="max-w-[400px] text-center">
          {t('content')}{' '}
        </P>
        <Link
          className={buttonVariants({ size: 'small', rounded: 'small', intent: 'pastelNeutral' })}
          href="/"
        >
          {t('button').toUpperCase()}
        </Link>
      </motion.main>
    </div>
  );
}
