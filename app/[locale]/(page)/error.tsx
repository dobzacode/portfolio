'use client';

import { buttonVariants } from '@/components/ui/button/button';
import H2 from '@/components/ui/text/h2';
import P from '@/components/ui/text/p';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const t = useTranslations('error');

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
        className={cn(
          `
      
         relative z-10 flex h-screen w-screen flex-col items-center justify-center gap-medium px-small text-primary90 dark:text-primary5 `
        )}
      >
        <H2 textType="heading--extra-large">500</H2>
        <P textType="body" className="max-w-[400px] text-center">
          {t('content')}{' '}
        </P>
        <Link
          className={buttonVariants({ size: 'small', rounded: 'small', intent: 'pastelNeutral' })}
          href="/"
        >
          {t('button').toUpperCase()}
        </Link>
      </motion.section>
    </div>
  );
}
