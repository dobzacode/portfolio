'use client';

import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { dynamicBlurDataUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AboutContent({}) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);
  const [blurSrc, setBlurSrc] = useState<string>(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  );

  const searchParams = useSearchParams();

  const t = useTranslations('about');

  useEffect(() => {
    const fetchBlurData = async () => {
      const blurImg = await dynamicBlurDataUrl('/image00043.jpeg');
      setBlurSrc(blurImg);
    };
    fetchBlurData();
  });

  return (
    <>
      <div
        className={`z-4 0 relative flex w-screen flex-col-reverse items-center justify-center gap-large bg-transparent pb-large  pt-medium duration-slowest max-laptop:px-large max-tablet:px-sub-large max-mobile-large:px-small tablet:px-medium laptop:flex-row  laptop:items-start  laptop:px-large laptop:pt-large laptop-large:px-extra-large ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="flex flex-col  laptop:w-1/2 laptop:max-w-[45%]">
          <div
            className={`relative z-50 -ml-[14px] flex h-full w-fit flex-row-reverse items-center gap-extra-small overflow-hidden mobile-large:-ml-[18px] `}
          >
            <motion.div
              className="relative z-50 w-full"
              key={`Title animated`}
              initial={{ x: '-200%' }}
              animate={{ x: '0', transition: { duration: 0.5, delay: 0.5 + splashDelay } }}
            >
              <H1 className="leading-small heading--extra-large relative z-50 w-full whitespace-nowrap font-['HFF_Ultrasound'] font-medium text-primary90 dark:text-primary1 max-tablet:text-heading-sub-extra-large max-tablet:leading-heading-sub-extra-large  max-mobile-large:text-heading-large  max-mobile-large:leading-heading-large ">
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
          <div
            className={`} relative z-50 flex h-full flex-col-reverse gap-medium  overflow-hidden pb-large
                          `}
          >
            <motion.div
              className="relative z-10 w-full"
              key={`Paragraph animated`}
              initial={{ y: '-250%' }}
              animate={{
                y: '0',
                transition: { type: 'spring', duration: 2, delay: 2.5 + splashDelay }
              }}
            >
              <P className="sub-heading relative z-10 w-full font-thin text-primary90 dark:text-primary1 max-tablet:text-sub-heading    max-mobile-large:text-body max-mobile-large:leading-sub-heading ">
                {t('text1')}
                <span className="font-semibold">
                  {t('text2')}
                  {'. '}
                </span>{' '}
                {t('text3')} <span className="font-semibold"> {t('text4')} </span>
                {t('text5')}
              </P>
            </motion.div>
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
              className="glowy-shadow relative z-20  bg-tertiary40  p-1 max-tablet:p-[2px]  "
            ></motion.hr>
          </div>
        </main>

        <motion.div
          key="moving image"
          initial={{ x: '20%', opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              x: { duration: 0.5, delay: splashDelay },
              opacity: { duration: 0.2, delay: splashDelay }
            }
          }}
          className="relative h-[500px] w-[1000px]   max-laptop:max-w-[99%] laptop:h-[800px] laptop:w-[500px] laptop-large:h-[700px]"
        >
          <Image
            src={'/image00043.jpeg'}
            sizes={'(max-width: 1000px) 100vw, 1000px'}
            blurDataURL={blurSrc}
            alt="Corentin Kittel Picture"
            fill
            className=" object-cover object-[10%_15%]  laptop:object-center  laptop:pt-4"
          ></Image>
        </motion.div>
      </div>
    </>
  );
}
