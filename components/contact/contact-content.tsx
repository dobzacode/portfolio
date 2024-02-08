'use client';

import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ContactContent({}) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const searchParams = useSearchParams();

  const t = useTranslations('contact');

  return (
    <>
      <div
        className={`z-4 0 relative flex w-screen flex-col-reverse items-center gap-medium   bg-transparent px-large pt-medium  duration-slowest  max-tablet:px-medium  max-mobile-large:px-sub-medium tablet:pt-large laptop-large:items-center ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="flex w-full flex-col mobile-large:min-w-fit  mobile-large:max-w-[80%] laptop:w-fit laptop-large:max-w-[1600px]">
          <div className="relative z-50 flex w-full flex-col">
            <div
              className={`} relative z-50 -ml-small flex h-full  w-fit items-center gap-extra-small
                            overflow-hidden`}
            >
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
              <motion.div
                className="relative z-50 w-full"
                key={`Title animated`}
                initial={{ x: '-200%' }}
                animate={{ x: '0', transition: { duration: 0.5, delay: 0.5 + splashDelay } }}
              >
                <H1 className="leading-small heading--sub-extra-large relative z-50 w-full whitespace-nowrap font-medium text-primary90 dark:text-primary1 max-tablet:text-heading-large max-tablet:leading-heading-large  max-mobile-large:text-heading-sub-large  max-mobile-large:leading-heading-sub-large ">
                  CONTACT
                </H1>
              </motion.div>
            </div>
          </div>

          <div
            className={`relative z-0 flex h-full w-full flex-col gap-extra-small  overflow-hidden  pb-medium `}
          >
            <motion.hr
              key={`Paragraph border`}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: '100%',
                opacity: 1,
                transition: {
                  width: {
                    duration: 0.5,
                    ease: 'easeInOut',

                    delay: 2.5 + splashDelay
                  },
                  opacity: { duration: 0.01, delay: 2.5 + splashDelay }
                }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              className="glowy-shadow relative  z-20 mb-small bg-tertiary40  p-1 max-tablet:w-[110%] max-tablet:p-[2px]  laptop-large:w-full"
            ></motion.hr>
            <div className="relative z-10 flex justify-between gap-extra-large max-laptop:flex-col max-laptop:gap-small">
              <motion.div
                key={`Email animated`}
                initial={{ y: '-450%' }}
                animate={{
                  y: '0',
                  transition: { type: 'spring', duration: 2, delay: 2.5 + splashDelay }
                }}
                className="sub-heading  flex items-start gap-sub-large text-primary90 dark:text-primary1 max-tablet:gap-medium max-tablet:text-body  max-tablet:leading-body max-[630px]:flex-col max-[630px]:items-start max-[630px]:gap-0 "
              >
                <P className="relative z-10  whitespace-nowrap font-semibold">E-MAIL</P>
                <a className="font-thin" href="mailto: contact@corentinkittel.fr">
                  contact@corentinkittel.fr
                </a>
              </motion.div>
              <motion.div
                key={`Social animated`}
                initial={{ y: '-450%' }}
                animate={{
                  y: '0',
                  transition: { type: 'spring', duration: 2, delay: 2.7 + splashDelay }
                }}
                className="sub-heading  flex items-start gap-large text-primary90 dark:text-primary1 max-tablet:gap-medium max-tablet:text-body   max-tablet:leading-body max-[630px]:flex-col max-[630px]:items-start max-[630px]:gap-0 "
              >
                <P className="relative z-10  whitespace-nowrap font-semibold">
                  {t('social').toUpperCase()}
                </P>
                <div className="flex flex-col gap-extra-small font-thin max-[630px]:gap-0">
                  <a href="linkedin">Linkedin</a>
                  <a href="https://github.com/dobzacode">Github</a>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
