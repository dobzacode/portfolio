'use client';

import { ProjectListProps, projectList } from '@/assets/project/project-list';
import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { dynamicBlurDataUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { projectName: string } }) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const [blurSrc, setBlurSrc] = useState<string>(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  );

  const searchParams = useSearchParams();
  const t = useTranslations('projectPage');

  const projectObj = projectList.find(
    (project: ProjectListProps) => project.title === params.projectName.toUpperCase()
  );

  useEffect(() => {
    const fetchBlurData = async () => {
      if (!projectObj) return;
      const blurImg = await dynamicBlurDataUrl(`${projectObj.image}`);
      setBlurSrc(blurImg);
    };
    fetchBlurData();
  });

  if (projectObj === undefined) {
    return notFound();
  }

  return (
    <div
      className={`z-4 0 relative flex h-screen w-screen flex-col-reverse items-center justify-between gap-medium bg-transparent pt-medium duration-slowest max-laptop:px-large max-tablet:px-sub-large max-mobile-large:px-small tablet:px-medium laptop:flex-row laptop:items-start  laptop:px-large  laptop:pt-large  laptop-large:px-extra-large ${
        searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
      }`}
    >
      <main className="text-primary90 dark:text-primary1 laptop:w-1/2">
        <div
          className={`} relative z-50 flex h-full w-fit flex-row-reverse items-center gap-extra-small overflow-hidden
                          laptop:-ml-small`}
        >
          <motion.div
            className="relative z-50 w-full"
            key={`Title animated`}
            initial={{ x: '-200%' }}
            animate={{ x: '0', transition: { duration: 1, delay: 0.5 + splashDelay } }}
          >
            <H1 className="leading-small heading--sub-extra-large relative z-50 w-full whitespace-nowrap font-thin   max-[841px]:text-heading-large max-[841px]:leading-heading-sub-extra-large max-[540px]:text-heading-sub-large max-[540px]:leading-heading-large max-mobile-medium:text-heading ">
              {projectObj.title.toUpperCase()}
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
                  delay: splashDelay
                },
                opacity: { duration: 4 - 1.5, times: [0, 0.05, 0.99, 1], delay: splashDelay }
              }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 }
            }}
            className="glowy-shadow relative z-10 h-[10rem] bg-tertiary40 p-1 max-tablet:h-[7.5rem] max-mobile-large:h-[5rem] max-mobile-large:p-[0.8px]"
          ></motion.div>
        </div>
        <div
          className={`} relative z-50 flex h-full flex-col-reverse gap-extra-small  overflow-hidden
                          pb-medium`}
        >
          <motion.div
            className="relative z-10 flex w-full justify-between"
            key={`Paragraph animated`}
            initial={{ y: '-250%' }}
            animate={{
              y: '0',
              transition: { type: 'spring', duration: 2, delay: 3.5 + splashDelay }
            }}
            exit={{ y: '-250%', transition: { duration: 2 } }}
          >
            <P className="sub-heading relative z-10 w-full font-semibold  max-tablet:text-sub-heading    max-mobile-large:text-body max-mobile-large:leading-sub-heading ">
              {t('category')}
            </P>
            <div>
              {projectObj.category.map((category) => {
                return (
                  <P
                    key={`${category}`}
                    className="sub-heading relative z-10 w-full whitespace-nowrap font-thin  max-tablet:text-sub-heading    max-mobile-large:text-body max-mobile-large:leading-sub-heading "
                  >
                    {category}
                  </P>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            className="relative z-10 flex w-full justify-between"
            key={`Paragraph animated`}
            initial={{ y: '-250%' }}
            animate={{
              y: '0',
              transition: { type: 'spring', duration: 2, delay: 3.5 + splashDelay }
            }}
            exit={{ y: '-250%', transition: { duration: 2 } }}
          >
            <P className="sub-heading relative z-10 w-full font-semibold  max-tablet:text-sub-heading    max-mobile-large:text-body max-mobile-large:leading-sub-heading ">
              {t('category')}
            </P>

            <P
              key={`${projectObj.year}`}
              className="sub-heading relative z-10 w-full whitespace-nowrap font-thin  max-tablet:text-sub-heading    max-mobile-large:text-body max-mobile-large:leading-sub-heading "
            ></P>
          </motion.div>
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
            className="glowy-shadow relative z-20 mb-medium  bg-tertiary40 p-1  max-mobile-large:p-[0.8px]"
          ></motion.hr>
        </div>
      </main>
      <motion.div
        initial={{ x: '20%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            x: { duration: 0.5, delay: splashDelay },
            opacity: { duration: 0.2, delay: splashDelay }
          }
        }}
        exit={{ x: '20%', opacity: 0, transition: { duration: 1 } }}
        className="relative -z-10 h-fit"
      >
        <Image
          src={projectObj.image}
          sizes={'(max-width: 1000px) 100vw, 1000px'}
          blurDataURL={blurSrc}
          alt={`Image of ${projectObj.title}`}
          width={1000}
          height={1000}
          className="relative -z-20 grayscale duration-slow hover:grayscale-0"
        ></Image>
        <div className="absolute top-0 -z-10 h-full w-full bg-primary40 opacity-5 hover:opacity-0"></div>
      </motion.div>
    </div>
  );
}
