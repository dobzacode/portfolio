'use client';

import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { mdilArrowRight } from '@mdi/light-js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ContactContent({}) {
  const [splashDelay] = useState<3 | 0>(!sessionStorage.getItem('shown') ? 3 : 0);

  const searchParams = useSearchParams();

  const t = useTranslations('contact');

  return (
    <>
      <div
        className={`z-4 0 relative flex w-screen  flex-col-reverse items-center  gap-medium  bg-transparent px-medium pt-medium   duration-slowest mobile-large:px-large  tablet:pt-large laptop:px-extra-large laptop-large:items-center ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="flex w-full max-w-[1300px] flex-col   ">
          <div className="relative z-50 flex w-full flex-col">
            <div
              className={`} relative z-50  flex h-full  w-fit items-center gap-extra-small
                            `}
            >
              <motion.div
                className="relative z-50 w-full"
                key={`Title animated`}
                initial={{ y: '-50%', opacity: 0 }}
                animate={{ y: '0', opacity: 1, transition: { duration: 0.5, delay: splashDelay } }}
              >
                <H1 className="leading-small heading--extra-large relative z-50 w-full whitespace-nowrap font-['HFF_Ultrasound'] font-medium text-primary90 dark:text-primary1 max-tablet:text-heading-sub-extra-large max-tablet:leading-heading-sub-extra-large  max-mobile-large:text-heading-large  max-mobile-large:leading-heading-large ">
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

                    delay: 0 + splashDelay
                  },
                  opacity: { duration: 0.01, delay: 0 + splashDelay }
                }
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              className="glowy-shadow relative  z-20 mb-small bg-tertiary40  p-1 max-tablet:w-[110%] max-tablet:p-[2px]  laptop-large:w-full"
            ></motion.hr>
            <div className="relative z-10 flex justify-between gap-extra-large max-[1200px]:flex-col max-[1200px]:gap-small">
              <motion.div
                key={`Email animated`}
                initial={{ y: '-450%' }}
                animate={{
                  y: '0',
                  transition: { type: 'spring', duration: 2, delay: 0.1 + splashDelay }
                }}
                className="sub-heading  flex items-start gap-sub-large text-primary90 dark:text-primary1 max-[1200px]:justify-between max-tablet:gap-medium max-tablet:text-body  max-tablet:leading-body  max-[630px]:gap-0 "
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
                  transition: { type: 'spring', duration: 2, delay: 0.3 + splashDelay }
                }}
                className="sub-heading  flex items-start gap-large text-primary90 dark:text-primary1 max-[1200px]:justify-between max-tablet:gap-medium max-tablet:text-body   max-tablet:leading-body max-[630px]:gap-0 "
              >
                <P className="relative z-10  whitespace-nowrap font-semibold">
                  {t('social').toUpperCase()}
                </P>
                <div className="flex flex-col gap-extra-small font-thin max-[630px]:gap-0">
                  <div className="flex items-center gap-extra-small text-primary90 dark:text-primary1  max-tablet:-mt-4">
                    <Icon
                      size={2}
                      className=" -rotate-45 max-tablet:scale-75
                      "
                      path={mdilArrowRight}
                    ></Icon>
                    <a href="linkedin">Linkedin</a>
                  </div>
                  <div className="flex items-center gap-extra-small text-primary90 dark:text-primary1  max-tablet:-mt-4">
                    <Icon
                      size={2}
                      className=" -rotate-45 max-tablet:scale-75"
                      path={mdilArrowRight}
                    ></Icon>
                    <a href="https://github.com/dobzacode">Github</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
