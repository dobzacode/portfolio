'use client';

import { Header } from '@/components/ui/header/header';
import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Page({}) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const searchParams = useSearchParams();

  const t = useTranslations('about');

  return (
    <>
      <Header
        size={'large'}
        textColor={'neutral'}
        className=" relative z-50 w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
      ></Header>
      <div
        className={`relative z-40 flex w-screen flex-col items-start justify-start bg-transparent px-extra-large pt-large  duration-slowest max-tablet:px-sub-large  max-mobile-large:px-small ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="w-1/2">
          <div
            className={`} relative z-50 flex h-full w-fit flex-row-reverse items-center gap-extra-small
                          overflow-hidden`}
          >
            <motion.div
              className="relative z-50 w-full"
              key={`Title animated`}
              initial={{ x: '-200%' }}
              animate={{ x: '0', transition: { duration: 1, delay: 1.5 + splashDelay } }}
            >
              <H1 className="leading-small heading--sub-extra-large relative z-50 w-full whitespace-nowrap  font-thin  text-primary90 dark:text-primary1 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large ">
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
                    duration: 4 - 1.5,
                    ease: 'easeIn',
                    times: [0, 0.25, 0.75, 1],
                    delay: 1 + splashDelay
                  },
                  opacity: { duration: 4 - 1.5, times: [0, 0.05, 0.99, 1], delay: 1 + splashDelay }
                }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              className="glowy-shadow relative z-10 h-[10rem] bg-tertiary40 p-1 max-mobile-large:h-[5rem] max-mobile-large:p-[0.8px]"
            ></motion.div>
          </div>
          <div
            className={`} relative z-50 flex h-full flex-col-reverse gap-extra-small  overflow-hidden
                          pb-medium`}
          >
            <motion.div
              className="relative z-10 w-full"
              key={`Paragraph animated`}
              initial={{ y: '-200%' }}
              animate={{
                y: '0',
                transition: { type: 'spring', duration: 2, delay: 4.8 + splashDelay }
              }}
            >
              <P className="sub-heading  relative z-10 w-full  font-thin  text-primary90 dark:text-primary1 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </P>
            </motion.div>
            <motion.hr
              key={`Paragraph border`}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: 700,
                opacity: 1,
                transition: {
                  width: {
                    duration: 1.2,
                    ease: 'easeIn',

                    delay: 3.5 + splashDelay
                  },
                  opacity: { duration: 0.01, delay: 3.5 + splashDelay }
                }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              className="glowy-shadow relative z-20   bg-tertiary40 p-1 max-mobile-large:h-[5rem] max-mobile-large:p-[0.8px]"
            ></motion.hr>
          </div>
        </main>
      </div>
    </>
  );
}
