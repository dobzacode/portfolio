'use client';

import { buttonVariants } from '@/components/ui/button';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
  return (
    <div>
      <motion.main
        initial={{ x: '-50%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            x: { duration: 2, type: 'spring' },
            opacity: { duration: 1 }
          }
        }}
        exit={{ opacity: 0, x: '50%', transition: { duration: 1.5 } }}
        className="flex h-[75vh] w-full flex-col items-center justify-center gap-medium px-small text-tertiary90 dark:text-tertiary5"
      >
        <h1 className="heading--extra-largeleading-heading-sub-extra-large">404</h1>
        <p className="body max-w-[400px] text-pretty text-center">
          La page que vous recherchez n&apos;existe pas. Veuillez vérifier l&apos;URL ou revenir à
          la page d&apos;accueil.
        </p>
        <Link
          className={buttonVariants({ size: 'small', rounded: 'small', intent: 'pastelNeutral' })}
          href="/"
        >
          Retour à la page d&apos;accueil
        </Link>
      </motion.main>
    </div>
  );
}
