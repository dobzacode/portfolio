'use client';

import { projectList } from '@/assets/project/project-list';
import useBetterMediaQuery from '@/components/hooks/use-better-media-query';
import { H1 } from '@/components/ui/text/h1';
import { Link } from '@/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Page({}) {
  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);
  const [hoveredProjectImage, setHoveredProjectImage] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const t = useTranslations('project');

  const handleLinkHover = (imageURL: string) => {
    setHoveredProjectImage(imageURL);
  };

  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');

  console.log(splashDelay);

  return (
    <>
      <div
        className={`z-4 0 relative flex w-screen  flex-col-reverse justify-between gap-medium bg-transparent pt-medium duration-slowest max-laptop-large:min-h-screen max-laptop:min-h-fit max-tablet:px-large  max-mobile-large:px-sub-large tablet:px-sub-extra-large laptop:flex-row laptop:items-start laptop:justify-center laptop:px-0  laptop:pt-large  laptop-large:gap-extra-large  ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="w-full laptop:w-[30%] laptop-large:w-[40%]  laptop-large:max-w-fit">
          <div
            className={`relative z-50 -ml-small flex h-full w-fit flex-row-reverse items-center gap-extra-small
                          overflow-hidden`}
          >
            <motion.div
              className="relative z-50 w-full"
              key={`Title animated`}
              initial={{ x: '-200%' }}
              animate={{ x: '0', transition: { duration: 0.5, delay: 0.5 + splashDelay } }}
            >
              <H1 className="leading-small heading--sub-extra-large relative z-50 w-full whitespace-nowrap font-thin text-primary90  dark:text-primary1  max-[841px]:text-heading-large max-[841px]:leading-heading-sub-extra-large max-[540px]:text-heading-sub-large max-[540px]:leading-heading-large max-mobile-medium:text-heading ">
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
          {projectList.map((project, index) => {
            return (
              <div
                key={`${project.title} block`}
                className={`relative z-50 flex h-full flex-col-reverse gap-sub-medium overflow-hidden pb-sub-medium mobile-large:pb-small tablet:gap-extra-small tablet:pb-medium`}
              >
                <motion.div
                  className="relative z-10 w-full"
                  key={`${project.title} animated`}
                  initial={{ y: '-250%' }}
                  animate={{
                    y: '0',
                    transition: {
                      type: 'spring',
                      duration: 1,
                      delay: 3.0 + splashDelay + index * 0.8
                    }
                  }}
                  exit={{ y: '-250%', transition: { duration: 2 } }}
                >
                  {/* Ajoutez onMouseEnter pour gérer le survol du lien */}
                  <Link
                    //@ts-ignore
                    href={`/work/${project.title.toLowerCase()}`}
                    onMouseEnter={() => handleLinkHover(project.image)}
                    onMouseLeave={() => setHoveredProjectImage(null)}
                    className="sub-heading relative z-10 w-full font-thin text-primary90 before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full dark:text-primary1 before:dark:border-tertiary40 max-tablet:text-sub-heading max-mobile-large:text-body max-mobile-large:leading-sub-heading"
                  >
                    {project.title}
                  </Link>
                </motion.div>
                <motion.hr
                  key={`${project.title} border`}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: '100%',
                    opacity: 1,
                    transition: {
                      width: {
                        duration: 0.5,
                        ease: 'easeInOut',

                        delay: 2.5 + splashDelay + index * 0.8
                      },
                      opacity: { duration: 0.01, delay: 2.5 + splashDelay + index * 0.8 }
                    }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5 }
                  }}
                  className="glowy-shadow relative z-20 bg-tertiary40 p-1  max-tablet:p-[2px]     tablet:mb-medium"
                ></motion.hr>
              </div>
            );
          })}
        </main>

        {isLaptop && (
          <div className="flex aspect-square w-[50%] justify-center max-laptop-large:translate-y-[130px]  max-laptop:hidden laptop-large:w-[30%]">
            <AnimatePresence mode="wait">
              {hoveredProjectImage && (
                <motion.div
                  className="relative aspect-square w-full "
                  initial={{ x: '50%' }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { opacity: { duration: 0.5 }, x: { type: 'spring', duration: 1 } }
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  key={hoveredProjectImage}
                >
                  <Image fill src={hoveredProjectImage} className="border-2 " alt="Project Image" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </>
  );
}
