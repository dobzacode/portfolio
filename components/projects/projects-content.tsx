'use client';

import { ProjectListProps, projectList } from '@/assets/project/project-list';
import useBetterMediaQuery from '@/components/hooks/use-better-media-query';
import { H1 } from '@/components/ui/text/h1';
import { Link } from '@/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react'; // Import useRef
import Carousel from '../ui/div/carousel';

export default function ProjectsContent({}) {
  const [splashDelay] = useState<3.5 | 0>(!sessionStorage.getItem('shown') ? 3.5 : 0);
  const [hoveredProject, sethoveredProject] = useState<ProjectListProps>(projectList[0]);

  const searchParams = useSearchParams();
  const t = useTranslations('project');

  const handleLinkHover = (project: ProjectListProps) => {
    sethoveredProject(project);
  };

  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');

  return (
    <>
      <div
        className={`z-4 0 relative flex w-screen  flex-col justify-between gap-medium bg-transparent pt-medium duration-slowest max-laptop-large:min-h-screen max-laptop:min-h-fit max-mobile-large:px-medium    mobile-large:px-large tablet:px-large tablet:pt-large laptop:flex-row laptop:items-start  laptop:justify-center laptop:px-extra-large laptop-large:gap-extra-large  ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="w-full laptop:w-2/5 laptop:max-w-[650px]  ">
          <div
            className={`relative z-50 flex h-full w-fit flex-row-reverse items-center gap-extra-small
                          `}
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
          {projectList.map((project, index) => {
            return (
              <div
                key={`${project.title} block`}
                className={`relative z-50 flex h-full flex-col-reverse gap-sub-medium overflow-hidden pb-small  max-mobile-large:gap-small  max-mobile-large:pb-small`}
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
                      delay: 0.5 + splashDelay + index * 0.5
                    }
                  }}
                >
                  <Link
                    //@ts-ignore
                    href={`/work/${project.title.toLowerCase()}`}
                    onMouseEnter={() => handleLinkHover(project)}
                    className="sub-heading relative z-10 w-full  text-primary90 before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full dark:text-primary1 before:dark:border-tertiary40 max-tablet:text-sub-heading max-mobile-large:text-body max-mobile-large:leading-sub-heading"
                  >
                    {project.title.replace('-', ' ')}
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

                        delay: 0 + splashDelay + index * 0.5
                      },
                      opacity: { duration: 0.01, delay: 0 + splashDelay + index * 0.5 }
                    }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5 }
                  }}
                  className="glowy-shadow relative z-20 bg-tertiary40 p-[1.8px]  max-tablet:p-[1.8px]     "
                ></motion.hr>
              </div>
            );
          })}
        </main>

        {isLaptop && (
          <div className="flex aspect-square justify-center pt-6   max-laptop:hidden  laptop:w-3/5 laptop:max-w-[650px]">
            <AnimatePresence mode="popLayout">
              {hoveredProject && (
                <motion.div
                  className="relative aspect-square w-full "
                  initial={{ x: '50%', opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { opacity: { duration: 0.3 }, x: { type: 'spring', duration: 2 } }
                  }}
                  exit={{
                    opacity: 0,
                    zIndex: '-30',
                    transition: { opacity: { duration: 0.5 }, zIndex: { duration: 0.01 } }
                  }}
                  key={`${hoveredProject.title} image`} // Use the ref key to minimize unwanted re-triggers
                >
                  <Link
                    //@ts-ignore
                    href={`/work/${hoveredProject.title.toLowerCase()}`}
                  >
                    <Image
                      priority={true}
                      sizes={'(max-width: 500px) 100vw, 800px'}
                      fill
                      placeholder="blur"
                      src={hoveredProject.image}
                      className="relative -z-20 border-2 grayscale"
                      alt="Project Image"
                    />
                    <div className="absolute top-0 -z-10 h-full w-full bg-primary40 opacity-5"></div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        {!isLaptop && <Carousel></Carousel>}
      </div>
    </>
  );
}
