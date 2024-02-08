'use client';

import useBetterMediaQuery from '@/components/hooks/use-better-media-query';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import StaticLogo from '../branding/static-logo';
import P from '../text/p';
import MovingLogo from './moving-logo';

export default function SplashScreen({}) {
  const [visible, setVisible] = useState(true);
  const isMobile = useBetterMediaQuery('(max-width: 500px)');

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
    <div className="fixed inset-0 z-[80] flex h-full w-full items-center justify-center bg-primary1 dark:bg-primary99">
      <div className=" slideInToRight flex h-[400px] w-[400px] flex-col items-center justify-center gap-small text-primary90 dark:text-primary1 ">
        {!isMobile && (
          <>
            <MovingLogo className="-mb-extra-large -ml-sub-large -mt-extra-large dark:hidden max-mobile-large:hidden"></MovingLogo>
            <MovingLogo
              isDark={true}
              className="-mb-extra-large -ml-sub-large -mt-extra-large hidden dark:block max-mobile-large:hidden"
            ></MovingLogo>
          </>
        )}
        {isMobile && <StaticLogo className="hidden w-40 max-mobile-large:block"></StaticLogo>}
        <div className="slideInFromLeft  flex items-end gap-small">
          <P textType="heading" className="max-tablet:text-sub-heading">
            {t('phrase')}{' '}
          </P>
          <PulseLoader
            color="#ffffff"
            className="relative z-20 hidden dark:block max-tablet:scale-75"
            size={4}
          />
          <PulseLoader
            color="#000000"
            className="relative z-20 -ml-[4rem] block dark:hidden max-tablet:scale-75"
            size={4}
          />
        </div>
      </div>
    </div>
  );
}
