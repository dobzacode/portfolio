'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import P from '../text/p';

export default function SplashScreen({}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('shown', 'true');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const t = useTranslations('loading');

  if (!visible || sessionStorage.getItem('shown')) return;

  return (
    <div className="fixed inset-0 z-[80] flex h-screen w-screen items-center justify-center overflow-hidden bg-primary1 dark:bg-primary99">
      <div className="slideInToRight flex w-fit  flex-col items-center justify-center gap-small text-primary90 dark:text-primary1 ">
        <div className="slideInFromLeft flex w-fit  flex-col items-center justify-center ">
          <P textType="heading" className="animate-pulse font-['HFF_Ultrasound'] ">
            {t('phrase')}{' '}
          </P>
          <BarLoader
            color="#ffffff"
            className="relative z-20 hidden animate-pulse rounded-sm dark:block max-mobile-large:-mt-1"
          />
          <BarLoader
            color="#000000"
            className="relative z-20 block animate-pulse rounded-sm dark:hidden max-mobile-large:-mt-1"
          />
        </div>
      </div>
      <div className="absolute bottom-small left-1/2 z-50 -translate-x-1/2  transform text-primary90  dark:text-primary1   max-mobile-large:bottom-large">
        <div className="slideInToRight   z-50">
          <div className="slideInFromLeft z-50">
            <Link
              href="/legal"
              className=" body leading-heading max-tablet:text-caption max-tablet:leading-caption"
            >
              &#169; Corentin Kittel 2024
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
