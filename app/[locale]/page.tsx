'use client';

import { Header } from '@/components/ui/header/header';
import NavLink from '@/components/ui/header/nav-link';
import { H1 } from '@/components/ui/text/h1';
import H2 from '@/components/ui/text/h2';
import P from '@/components/ui/text/p';
import { mdilArrowRight } from '@mdi/light-js';
import Icon from '@mdi/react';
import { easeOut, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { hasCookie } from 'cookies-next';
import { useSearchParams } from 'next/navigation';

export default function HomePage({}) {
  const [extraDelay] = useState<4.3 | 1>(!hasCookie('corentin') ? 4.3 : 1);

  const searchParams = useSearchParams();

  const t = useTranslations('home');

  return (
    <>
      <Header
        size={'large'}
        textColor={'neutral'}
        className="  w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
      ></Header>
      <main
        className={`relative flex h-[80vh] w-screen flex-col items-center justify-center gap-medium duration-slow ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute -top-medium -z-10">
          <motion.p
            key="hello"
            initial={{ rotate: '-17deg', x: '100px', opacity: 0 }}
            animate={{
              opacity: 1,
              x: '0px',
              rotate: '-17deg',
              transition: {
                delay: 3.0 + extraDelay,
                type: 'spring',
                stiffness: '40'
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                type: 'tween',
                duration: 1 + 2
              }
            }}
            className="heading--extra-large absolute -left-[15rem] top-extra-large z-10  font-['HFF_Ultrasound'] font-extrabold  leading-none text-tertiary40"
          >
            {t('greeting').toUpperCase()}
          </motion.p>
          <div className="overflow-hidden py-small">
            <motion.img
              key="portrait"
              initial={{ y: '70vh' }}
              animate={{
                y: '0px',
                transition: {
                  delay: 2.3 + extraDelay,
                  type: 'spring',
                  stiffness: '40'
                }
              }}
              exit={{
                y: '70vh',
                transition: {
                  type: 'tween',
                  duration: 1 + 2
                }
              }}
              width="400"
              height="400"
              src="/random-portrait.png"
              alt="picture"
            ></motion.img>
          </div>
        </div>
        <div className="py-extra-large"></div>
        <div className="relative mt-extra-large flex flex-col items-center justify-center bg-primary1  duration-medium dark:bg-primary99">
          <motion.hr
            key="hr"
            initial={{ maxWidth: 0, opacity: '0', border: '0px solid hsl(174 69% 60%)' }}
            animate={{
              opacity: '1',
              maxWidth: '100%',
              border: '2px solid hsl(174 69% 60%)',
              transition: { type: easeOut, delay: 2 + extraDelay }
            }}
            exit={{ maxWidth: 0, transition: { type: easeOut, delay: 1, duration: 0.5 + 2 } }}
            className=" absolute top-0 mb-4  box-content  w-2/5  border-tertiary40"
          ></motion.hr>
          <motion.div
            key="text"
            initial={{ x: '-100px', opacity: 0 }}
            animate={{
              opacity: 1,
              x: '0px',

              transition: {
                delay: 3.6 + extraDelay,
                type: 'spring',
                stiffness: '40'
              }
            }}
            exit={{ x: '100px', opacity: 0, transition: { delay: 2 } }}
            className="whitespace-nowrap pt-small text-center text-primary90 dark:text-primary1 "
          >
            <P textType="heading" className="inline">
              {t('phrase1')}
            </P>
            <H2 textType="heading" className="inline whitespace-nowrap font-bold">
              {' '}
              {t('phrase2')}
            </H2>
            <br></br>
            <P textType="heading" className="inline">
              {t('phrase3')}
            </P>
            <H1 textType="heading" className="inline whitespace-nowrap font-bold">
              {' '}
              {t('phrase4')}
            </H1>
            <br></br>
            <P textType="heading" className="inline">
              {t('phrase5')}
            </P>
            <H2 textType="heading" className="inline whitespace-nowrap font-bold">
              {' '}
              {t('phrase6')}
            </H2>
          </motion.div>
        </div>
        <div className="relative   flex justify-between gap-large">
          <motion.div
            key="workLink"
            initial={{ y: '-100px', opacity: 0 }}
            animate={{
              y: '0px',
              opacity: 1,
              transition: {
                type: 'spring',
                delay: 5 - (extraDelay - 1)
              }
            }}
            exit={{ y: '100px', opacity: 0, transition: { delay: 2 } }}
            className="relative  flex items-center gap-extra-small text-tertiary90 dark:text-tertiary1"
          >
            <Icon path={mdilArrowRight} size={2} />

            <NavLink
              size="large"
              isLi={false}
              href="/work"
              className="relative font-['HFF_Ultrasound'] font-thin before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full before:dark:border-tertiary40"
            >
              {t('project')}
            </NavLink>
          </motion.div>
          <motion.div
            key="aboutLink"
            initial={{ y: '-100px', opacity: 0 }}
            animate={{
              y: '0px',
              opacity: 1,
              transition: {
                type: 'spring',
                delay: 5.3 - (extraDelay - 1)
              }
            }}
            exit={{ y: '100px', opacity: 0, transition: { delay: 2 } }}
            className="relative   flex items-center gap-extra-small text-tertiary90 dark:text-tertiary1 "
          >
            <Icon path={mdilArrowRight} size={2} />

            <NavLink
              size="large"
              isLi={false}
              href="/about"
              className="relative  font-['HFF_Ultrasound'] font-thin before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full before:dark:border-tertiary40"
            >
              {t('about')}
            </NavLink>
          </motion.div>
        </div>
      </main>
    </>
  );
}
