'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import P from '../text/p';
import MovingLogo from './moving-logo';

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
    <div className="fixed inset-0 z-[80] flex h-full w-full items-center justify-center bg-primary1 dark:bg-primary99">
      <div className=" slideInToRight flex h-[400px] w-[400px] flex-col items-center justify-center gap-small text-primary90 dark:text-primary1 ">
        <MovingLogo className="-mb-extra-large -ml-sub-large -mt-extra-large"></MovingLogo>
        <div className="slideInFromLeft  flex items-end gap-small">
          <P textType="heading">{t('phrase')} </P>
          <PulseLoader size={4} />
        </div>
      </div>
    </div>
  );
}
