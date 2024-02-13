'use client';

import { H1 } from '@/components/ui/text/h1';
import H2 from '@/components/ui/text/h2';
import P from '@/components/ui/text/p';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LegalContent({}) {
  const [splashDelay] = useState<3.5 | 0>(!sessionStorage.getItem('shown') ? 3.5 : 0);

  const t = useTranslations('legal');

  const searchParams = useSearchParams();

  return (
    <main
      className={`slideInFromBottom flex flex-col gap-sub-large px-small py-extra-large text-primary90 duration-slowest dark:text-primary1 mobile-large:px-large  ${
        searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
      }`}
    >
      <div
        className={`} relative z-50 flex h-full w-fit flex-row-reverse items-center gap-extra-small overflow-hidden
                            tablet:-ml-small min-[1700px]:-mt-[2.2rem]`}
      >
        <motion.div
          className="relative z-50 w-full"
          key={`Title animated`}
          initial={{ x: '-200%' }}
          animate={{ x: '0', transition: { duration: 0.5, delay: 0.5 + splashDelay } }}
        >
          <H1 className="leading-small heading--sub-extra-large relative z-50 w-full whitespace-nowrap font-thin max-laptop:text-heading-large max-laptop:leading-heading-sub-extra-large  max-[841px]:text-heading-sub-large max-[841px]:leading-heading-large    max-mobile-large:w-full max-mobile-large:text-heading max-mobile-large:leading-heading-sub-large  ">
            {t('title').toUpperCase()}
          </H1>
        </motion.div>
        <motion.div
          key={`Title border`}
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{
            maxHeight: [0, 100, 100, 0],
            opacity: [0, 1, 1, 0],
            transition: {
              maxHeight: {
                duration: 2.5,
                ease: 'easeInOut',
                times: [0, 0.25, 0.4, 1],
                delay: splashDelay
              },
              opacity: { duration: 2.5, times: [0, 0.05, 0.99, 1], delay: splashDelay }
            }
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 }
          }}
          className="glowy-shadow relative z-10 h-[10rem] bg-tertiary40 p-1 max-tablet:h-[7.5rem] max-tablet:p-[2px] max-mobile-large:h-[5rem]"
        ></motion.div>
      </div>
      <P textType={'body'}>
        {t('law')}
        <br />
        <br />
        {t('law2')}
      </P>
      <div className="flex flex-col gap-sub-medium ">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('legalInformation.heading')}
        </H2>
        <P textType={'body'}>
          {t('legalInformation.content')}
          <br />
          <br /> {t('legalInformation.content2')}
          <br /> {t('legalInformation.content3')}
          <br /> {t('legalInformation.content5')}
          <br />
          <br /> {t('legalInformation.webmaster')} <br />
          {t('legalInformation.webmasterEmail')}
          <br />
          <br /> {t('legalInformation.hosting1')} <br /> {t('legalInformation.hosting2')} <br />
          {t('legalInformation.hosting3')}
        </P>
      </div>
      <div className="flex flex-col gap-sub-medium ">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('principles.heading')}
        </H2>
        <P textType={'body'}>{t('principles.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium ">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('accessibility.heading')}
        </H2>
        <P textType={'body'}>{t('accessibility.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium ">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('property.heading')}
        </H2>
        <P textType={'body'}>{t('property.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium ">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('cookies.heading')}
        </H2>
        <P textType={'body'}>{t('cookies.content')}</P>
      </div>
      <div className="flex flex-col gap-sub-medium ">
        <H2 textType="heading--sub-large" className="font-thin">
          {t('protection.heading')}
        </H2>
        <P textType={'body'}>
          {t('protection.content')}
          <br></br>
          <br></br> {t('protection.content2')}
          <br />
          <br /> {t('protection.content3')} <br></br>
          <br /> {t('protection.content4')}
        </P>
      </div>
    </main>
  );
}
