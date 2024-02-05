'use client';

import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Page({}) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const searchParams = useSearchParams();

  const t = useTranslations('contact');

  return (
    <>
      <div
        className={`z-4 0 relative flex w-screen flex-col-reverse  gap-medium bg-transparent px-large pt-medium  duration-slowest  max-tablet:px-medium max-mobile-large:px-sub-medium ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="w-full">
          <div
            className={`} relative z-50 flex h-full w-full  items-center gap-extra-small overflow-hidden
                          laptop:-ml-small`}
          >
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
                    delay: splashDelay
                  },
                  opacity: { duration: 4 - 1.5, times: [0, 0.05, 0.99, 1], delay: splashDelay }
                }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              className="glowy-shadow relative z-10 h-[10rem] w-fit bg-tertiary40 p-1 max-tablet:h-[7.5rem] max-mobile-large:h-[5rem] max-mobile-large:p-[0.8px]"
            ></motion.div>
            <motion.div
              className="relative z-50 w-fit"
              key={`Title animated`}
              initial={{ x: '-200%' }}
              animate={{ x: '0', transition: { duration: 1, delay: 0.5 + splashDelay } }}
            >
              <H1 className="leading-small heading--sub-extra-large relative z-50 w-full whitespace-nowrap font-thin text-primary90  dark:text-primary1  max-[841px]:text-heading-large max-[841px]:leading-heading-sub-extra-large max-[540px]:text-heading-sub-large max-[540px]:leading-heading-large max-mobile-medium:text-heading ">
                CONTACT
              </H1>
            </motion.div>
          </div>
          <div
            className={`} relative z-50 flex h-full flex-col-reverse gap-extra-small  overflow-hidden
                          pb-medium`}
          >
            <div className="relative z-10 flex w-full justify-between gap-extra-large max-[1391px]:flex-col-reverse max-[1391px]:gap-small">
              <motion.div
                key={`Email animated`}
                initial={{ y: '-450%' }}
                animate={{
                  y: '0',
                  transition: { type: 'spring', duration: 2, delay: 3.7 + splashDelay }
                }}
                exit={{ y: '-450%', transition: { duration: 2 } }}
                className="sub-heading  flex items-end gap-sub-large text-primary90 dark:text-primary1 max-tablet:gap-medium max-tablet:text-sub-heading max-[630px]:flex-col  max-[630px]:items-start max-[630px]:gap-0 max-mobile-large:text-body max-mobile-large:leading-sub-heading "
              >
                <P className="relative z-10  whitespace-nowrap font-semibold">E-MAIL</P>
                <a className="font-thin" href="mailto: contact@corentinkittel.fr">
                  contact@corentinkittel.fr
                </a>
              </motion.div>
              <motion.div
                key={`Linkedin animated`}
                initial={{ y: '-450%' }}
                animate={{
                  y: '0',
                  transition: { type: 'spring', duration: 2, delay: 4 + splashDelay }
                }}
                exit={{ y: '-450%', transition: { duration: 2 } }}
                className="sub-heading  flex items-end gap-large text-primary90 dark:text-primary1 max-tablet:gap-medium max-tablet:text-sub-heading max-[630px]:flex-col   max-[630px]:items-start max-[630px]:gap-0 max-mobile-large:text-body max-mobile-large:leading-sub-heading "
              >
                <P className="relative z-10  whitespace-nowrap font-semibold">
                  {t('social').toUpperCase()}
                </P>
                <a className="font-thin" href="linkedin">
                  Linkedin
                </a>
              </motion.div>
            </div>
            <motion.hr
              key={`Paragraph border`}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: '100%',
                opacity: 1,
                transition: {
                  width: {
                    duration: 1.2,
                    ease: 'easeIn',

                    delay: 2.5 + splashDelay
                  },
                  opacity: { duration: 0.01, delay: 2.5 + splashDelay }
                }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              className="glowy-shadow relative z-20 mb-medium w-[110%]  bg-tertiary40 p-1  max-mobile-large:p-[0.8px]"
            ></motion.hr>
          </div>
        </main>
      </div>
    </>
  );
}
