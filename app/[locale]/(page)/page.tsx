'use client';

import NavLink from '@/components/ui/header/nav-link';
import { H1 } from '@/components/ui/text/h1';
import H2 from '@/components/ui/text/h2';
import P from '@/components/ui/text/p';
import { mdilArrowRight } from '@mdi/light-js';
import Icon from '@mdi/react';
import { easeInOut, easeOut, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

export default function HomePage({}) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const searchParams = useSearchParams();

  const t = useTranslations('home');

  return (
    <>
      <main
        className={`relative z-40 flex h-fit w-screen flex-col  items-center justify-center  overflow-hidden bg-transparent  pt-medium duration-slowest ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <div className="relative z-10 flex justify-center ">
          <motion.p
            key="hello"
            initial={{ rotate: '-17deg', x: '100px', opacity: 0 }}
            animate={{
              opacity: 1,
              x: '0px',
              rotate: '-17deg',
              transition: {
                delay: 1 + splashDelay,
                type: 'spring',
                stiffness: '40'
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                type: 'tween',
                duration: 1
              }
            }}
            className="heading--extra-large  absolute -left-[15rem] top-extra-large -z-10 font-['HFF_Ultrasound'] font-extrabold leading-none  text-tertiary40 max-tablet:-left-medium  max-tablet:top-large max-tablet:text-heading-sub-extra-large max-mobile-large:left-extra-small max-mobile-large:text-heading-large"
          >
            {t('greeting').toUpperCase()}
          </motion.p>
          <div className="flex justify-center overflow-hidden max-tablet:w-2/3">
            <motion.img
              key="portrait"
              initial={{ y: '70vh' }}
              animate={{
                y: '0px',
                transition: {
                  delay: splashDelay,
                  ease: easeInOut,
                  duration: 1.5
                }
              }}
              exit={{
                y: '70vh',
                transition: {
                  type: 'tween',
                  duration: 1
                }
              }}
              className="pl-medium"
              width="400"
              height="400"
              src="/random-portrait.png"
              alt="picture"
            ></motion.img>
            <motion.hr
              key="hr"
              initial={{ maxWidth: 0, opacity: '0' }}
              animate={{
                opacity: 1,
                maxWidth: '100%',

                transition: {
                  maxWidth: { type: easeOut, delay: 0.5 + splashDelay },
                  opacity: { duration: 0.01, delay: 0.5 + splashDelay }
                }
              }}
              exit={{ maxWidth: 0, transition: { type: easeOut, duration: 1 } }}
              className=" absolute bottom-0 z-40 box-content w-full border-2 border-tertiary40  max-tablet:w-2/3"
            ></motion.hr>
          </div>
        </div>

        <div className="max-mobile-large:gap-asmall relative z-20 flex flex-col items-center justify-center   gap-medium duration-medium max-laptop:w-4/5">
          <motion.div
            key="text"
            initial={{ x: '-100px', opacity: 0 }}
            animate={{
              opacity: 1,
              x: '0px',

              transition: {
                delay: 0.6 + splashDelay,
                type: 'spring',
                stiffness: '40'
              }
            }}
            className="relative z-40 pt-small text-center text-primary90 dark:text-primary1 "
          >
            <P
              textType="heading"
              className="inline max-tablet:text-sub-heading max-tablet:leading-heading max-mobile-large:text-body max-mobile-large:leading-sub-heading laptop:leading-[4.1rem]"
            >
              {t('phrase1')}
            </P>
            <H2
              textType="heading"
              className="inline font-bold max-tablet:text-sub-heading max-tablet:leading-sub-heading max-mobile-large:text-body max-mobile-large:leading-body laptop:leading-[4.1rem]"
            >
              {' '}
              {t('phrase2')},{' '}
            </H2>
            <br className="max-laptop:hidden"></br>
            <P
              textType="heading"
              className="inline max-tablet:text-sub-heading max-tablet:leading-sub-heading max-mobile-large:text-body max-mobile-large:leading-body laptop:leading-[4.1rem]"
            >
              {t('phrase3')}
            </P>
            <H1
              textType="heading"
              className="inline font-bold max-tablet:text-sub-heading max-tablet:leading-sub-heading max-mobile-large:text-body max-mobile-large:leading-body laptop:leading-[4.1rem]"
            >
              {' '}
              {t('phrase4')}
            </H1>{' '}
            <br className="max-laptop:hidden"></br>
            <P
              textType="heading"
              className="inline max-tablet:text-sub-heading max-tablet:leading-sub-heading max-mobile-large:text-body max-mobile-large:leading-body laptop:leading-[4.1rem]"
            >
              {t('phrase5')}
            </P>
            <H2
              textType="heading"
              className="inline font-bold max-tablet:text-sub-heading max-tablet:leading-sub-heading max-mobile-large:text-body max-mobile-large:leading-body laptop:leading-[4.1rem]"
            >
              {' '}
              {t('phrase6')}
            </H2>
          </motion.div>
          <div className="relative  flex h-[7rem] items-start justify-between gap-large">
            <motion.div
              key="workLink"
              initial={{ y: '-100px', opacity: 0 }}
              animate={{
                y: '0px',
                opacity: 1,
                transition: {
                  type: 'spring',
                  delay: 1.5 + splashDelay
                }
              }}
              className="max-tablet:gap-0gap-extra-small   relative flex  items-center text-tertiary90 dark:text-tertiary1"
            >
              <Icon className="max-tablet:scale-75" path={mdilArrowRight} size={2} />

              <NavLink
                size="large"
                isLi={false}
                href="/work"
                className="relative whitespace-nowrap font-['HFF_Ultrasound'] font-thin leading-heading before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full before:dark:border-tertiary40 max-tablet:text-sub-heading max-mobile-large:text-body"
              >
                {t('project')}
              </NavLink>
            </motion.div>
            <motion.div
              key="abountLink"
              initial={{ y: '-100px', opacity: 0 }}
              animate={{
                y: '0px',
                opacity: 1,
                transition: {
                  type: 'spring',
                  delay: 1.8 + splashDelay
                }
              }}
              className="max-tablet:gap-0gap-extra-small   relative flex  items-center text-tertiary90 dark:text-tertiary1"
            >
              <Icon className="max-tablet:scale-75" path={mdilArrowRight} size={2} />

              <NavLink
                size="large"
                isLi={false}
                href="/work"
                className="relative whitespace-nowrap font-['HFF_Ultrasound'] font-thin leading-heading before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full before:dark:border-tertiary40 max-tablet:text-sub-heading max-mobile-large:text-body"
              >
                {t('about')}
              </NavLink>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
