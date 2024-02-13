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
  const [splashDelay] = useState<3.5 | 0>(!sessionStorage.getItem('shown') ? 3.5 : 0);
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
        className={`z-4 0 relative flex w-screen  flex-col items-center justify-center gap-small  bg-transparent px-medium pb-large pt-sub-large  duration-slowest mobile-large:px-large tablet:pt-large laptop:flex-row   laptop:items-start  laptop:gap-large   laptop:px-extra-large laptop:pt-large ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="flex flex-col  laptop:w-3/5 laptop:max-w-[650px] laptop-large:w-1/2">
          <div
            className={`relative z-50  flex h-full w-fit flex-row-reverse items-center gap-extra-small `}
          >
            <motion.div
              className="relative z-50 w-full"
              key={`Title animated`}
              initial={{ y: '-50%', opacity: 0 }}
              animate={{ y: '0', opacity: 1, transition: { duration: 0.5, delay: splashDelay } }}
            >
              <H1 className="leading-small heading--extra-large relative z-50 w-full whitespace-nowrap font-['HFF_Ultrasound'] font-medium text-primary90 dark:text-primary1 max-tablet:text-heading-sub-extra-large max-tablet:leading-heading-sub-extra-large  max-mobile-large:text-heading-large  max-mobile-large:leading-heading-large ">
                {t('title').toUpperCase()}
              </H1>
            </motion.div>
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
                transition: { type: 'spring', duration: 2, delay: 0.1 + splashDelay }
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

                    delay: 0 + splashDelay
                  },
                  opacity: { duration: 0.01, delay: 0 + splashDelay }
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
          className="relative h-[500px] w-full   laptop:h-[700px]  laptop:w-full laptop:max-w-[650px] laptop-large:h-[800px]"
        >
          <Image
            priority={true}
            src={'/image00043.jpeg'}
            sizes={'(max-width: 1000px) 100vw, 1000px'}
            blurDataURL={blurSrc}
            alt="Corentin Kittel Picture"
            fill
            className="object-cover object-top laptop:object-center laptop:pt-6 laptop-large:object-contain  laptop-large:object-left-top"
          ></Image>
        </motion.div>
      </div>
    </>
  );
}
