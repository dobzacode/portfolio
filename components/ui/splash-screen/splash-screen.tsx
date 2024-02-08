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
    }, 4500);

    return () => clearTimeout(timeoutId);
  }, []);

  const t = useTranslations('loading');

  if (!visible || sessionStorage.getItem('shown')) return;

  return (
    <div className="fixed inset-0 z-[80] flex h-screen w-screen items-center justify-center overflow-hidden bg-primary1 dark:bg-primary99">
      <div className="slideInToRight  flex h-[400px] w-[400px] flex-col items-center justify-center gap-small text-primary90 dark:text-primary1 ">
        <div className="slideInFromLeft  flex  flex-col items-center justify-center gap-extra-small">
          <P
            textType="heading"
            className="animate-pulse font-['HFF_Ultrasound'] max-tablet:text-sub-heading max-tablet:leading-sub-heading"
          >
            {t('phrase')}{' '}
          </P>
          <BarLoader
            color="#ffffff"
            className="relative z-20 hidden  animate-pulse rounded-sm dark:block"
          />
          <BarLoader
            color="#000000"
            className="relative z-20 block  animate-pulse rounded-sm dark:hidden"
          />
        </div>
      </div>
      <div className="absolute bottom-small left-1/2 m-auto -translate-x-1/2 transform text-primary90  dark:text-primary1  ">
        <div className="slideInToRight ">
          <div className="slideInFromLeft">
            <Link
              href="/legal"
              className=" sub-heading leading-heading max-tablet:text-body max-tablet:leading-body"
            >
              &#169; Corentin Kittel 2024
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
