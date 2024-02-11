'use client';

import { ProjectListProps, projectList } from '@/assets/project/project-list';
import { H1 } from '@/components/ui/text/h1';
import P from '@/components/ui/text/p';
import { dynamicBlurDataUrl } from '@/lib/utils';
import { Link } from '@/navigation';
import { mdilArrowRight } from '@mdi/light-js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectContent({ params }: { params: { projectName: string } }) {
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

  console.log(projectList[projectObj.id - 1], projectObj.id - 1);

  return (
    <div className="flex h-full w-screen justify-center overflow-hidden px-medium py-medium mobile-large:px-large tablet:px-large laptop:py-large laptop:pl-extra-large laptop-large:px-extra-large">
      <div
        className={`z-4 0 relative flex h-fit w-full  flex-col   justify-center gap-sub-large bg-transparent   duration-slowest     max-mobile-large:w-full max-mobile-large:max-w-full  laptop:flex-row       ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <main className="flex   w-full flex-col   text-primary90 dark:text-primary1 laptop:w-1/2 laptop-large:w-full laptop-large:max-w-[650px]">
          <div className="relative z-50 flex w-full flex-col bg-transparent max-laptop:w-auto">
            <div
              className={`} relative z-50 -ml-small  flex w-fit flex-row-reverse items-center gap-extra-small
                              overflow-hidden `}
            >
              <motion.div
                className="relative z-50 w-full"
                key={`Title animated`}
                initial={{ x: '-200%' }}
                animate={{ x: '0', transition: { duration: 0.5, delay: 0.5 + splashDelay } }}
              >
                <H1 className="leading-small heading--extra-large relative z-50 w-full whitespace-nowrap font-['HFF_Ultrasound'] font-medium text-primary90 dark:text-primary1 max-tablet:text-heading-sub-extra-large max-tablet:leading-heading-sub-extra-large  max-mobile-large:text-heading-large  max-mobile-large:leading-heading-large ">
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
                className="glowy-shadow relative z-10 -mt-3 h-[10rem] bg-tertiary40 p-1 max-tablet:-mt-2 max-tablet:h-[7.5rem] max-tablet:p-[2px] max-mobile-large:-mt-1 max-mobile-large:h-[5rem]"
              ></motion.div>
            </div>
          </div>
          <div
            className={` relative  z-10 flex  w-full flex-col gap-medium  overflow-hidden pb-medium`}
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
              className="glowy-shadow  relative z-20  bg-tertiary40 p-1  max-tablet:p-[2px]"
            ></motion.hr>
            <motion.div
              initial={{ y: '-250%', opacity: 0 }}
              animate={{
                y: '0',
                opacity: 1,
                transition: {
                  y: {
                    type: 'spring',
                    duration: 2,
                    delay: 0.5 + splashDelay
                  },
                  opacity: { duration: 2, delay: 0.5 + splashDelay }
                }
              }}
              exit={{ y: '-50%', transition: { duration: 0.5 } }}
              className="relative -z-20 flex w-full flex-col gap-small overflow-hidden "
            >
              <div
                className="relative z-10 flex w-full justify-between "
                key={`Paragraph animated`}
              >
                <P className="sub-heading relative z-10 w-full max-w-full font-semibold  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body ">
                  {t('category')}
                </P>
                <div className=" flex w-3/5 flex-col">
                  {projectObj.category.map((category) => {
                    return (
                      <P
                        key={`${category}`}
                        className="sub-heading relative z-10 whitespace-nowrap font-thin  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body "
                      >
                        {category}
                      </P>
                    );
                  })}
                </div>
              </div>
              <div className="relative z-10 flex w-full justify-between ">
                <P className="sub-heading relative z-10 w-full max-w-full font-semibold  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body ">
                  {t('year')}
                </P>
                <P className=" sub-heading relative z-10 w-3/5 whitespace-nowrap font-thin  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body ">
                  {projectObj.year}
                </P>
              </div>
              <div className="relative z-10 flex w-full justify-between ">
                <P className="sub-heading relative z-10 w-full max-w-full font-semibold  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body ">
                  Stack
                </P>
                <div className="flex w-3/5 flex-col">
                  {projectObj.stack.map((stack) => {
                    return (
                      <P
                        key={`${stack}`}
                        className=" sub-heading relative z-10 w-full whitespace-nowrap font-thin  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body "
                      >
                        {stack}
                      </P>
                    );
                  })}
                </div>
              </div>
              <div className="relative z-10 flex w-full justify-between ">
                <P className="sub-heading relative z-10 w-full max-w-full font-semibold  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body ">
                  {t('status.label')}
                </P>
                <P className=" sub-heading relative z-10 w-3/5 whitespace-nowrap font-thin  max-tablet:text-body    max-mobile-large:text-body max-mobile-large:leading-body ">
                  {t(`status.${projectObj.status}`)}
                </P>
              </div>
              <div className="flex justify-between  max-[1300px]:flex-col max-[1300px]:gap-extra-small max-laptop:flex-row max-laptop:gap-0 max-mobile-large:flex-col">
                <a
                  //@ts-ignore
                  href={projectObj.url}
                  className="sub-heading m relative z-40 flex w-full items-center gap-extra-small font-thin text-primary90  dark:text-primary1 max-tablet:-ml-[0.8rem] max-tablet:text-body  max-mobile-large:text-body "
                >
                  <Icon
                    size={2}
                    className="-rotate-45 max-tablet:scale-75"
                    path={mdilArrowRight}
                  ></Icon>
                  <P className="relative w-fit before:absolute before:bottom-0 before:-z-10  before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:max-w-full before:dark:border-tertiary40  max-tablet:-ml-[0.8rem] max-mobile-large:-mb-1 tablet:before:-mb-1">
                    {t('url')}
                  </P>
                </a>
                <a
                  //@ts-ignore
                  href={projectObj.url}
                  className="sub-heading relative z-40 flex w-3/5 items-center gap-extra-small whitespace-nowrap font-thin text-primary90  dark:text-primary1 max-tablet:text-body max-mobile-large:-ml-[0.8rem] max-mobile-large:text-body  "
                >
                  <Icon
                    size={2}
                    className=" -rotate-45 max-laptop:-ml-[3.8rem] max-tablet:-ml-[3rem] max-tablet:scale-75 max-mobile-large:ml-0 min-[1300px]:-ml-[3.8rem]"
                    path={mdilArrowRight}
                  ></Icon>

                  <P className="relative w-fit before:absolute before:bottom-0 before:-z-10  before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:max-w-full before:dark:border-tertiary40  max-tablet:-ml-[0.8rem]  max-mobile-large:-mb-1 tablet:before:-mb-1">
                    {t('github')}
                  </P>
                </a>
              </div>
            </motion.div>
          </div>
        </main>

        <motion.div
          initial={{ x: '20%', opacity: 0 }}
          animate={{
            x: '0',
            opacity: 1,
            transition: {
              x: { type: 'spring', duration: 2, delay: 1.5 + splashDelay - 0.8 },
              opacity: { duration: 0.8, delay: 1.5 + splashDelay - 0.8 }
            }
          }}
          exit={{ y: '-20%', opacity: 0, transition: { duration: 0.5 } }}
          className="relative z-50 aspect-square w-full  max-laptop:mb-large laptop:mt-6 laptop:w-1/2 laptop-large:max-w-[650px]"
        >
          <Image
            priority={true}
            src={projectObj.image}
            sizes={'(max-width: 1000px) 100vw, 700x'}
            blurDataURL={blurSrc}
            alt={`Image of ${projectObj.title}`}
            fill
            className="relative -z-20 object-cover grayscale duration-slow"
          ></Image>
          <div className="absolute top-0 -z-10 h-full w-full bg-primary40 opacity-5 "></div>
          <div className=" justify-between">
            {projectList[projectObj.id - 1] && (
              <Link //@ts-ignore
                href={`/work/${projectList[projectObj.id - 1].title.toLowerCase()}`}
                className="sub-heading absolute -bottom-[4.8rem] left-0 z-10 flex w-fit items-center gap-extra-small font-thin text-primary90  dark:text-primary1 max-tablet:text-body  max-mobile-large:text-body max-mobile-large:leading-body"
              >
                <P className="relative whitespace-nowrap font-['HFF_Ultrasound'] font-thin leading-heading before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full before:dark:border-tertiary40 max-tablet:text-sub-heading max-mobile-large:text-body">
                  {t('previousProject')}
                </P>
              </Link>
            )}
            {projectList[projectObj.id + 1] && (
              <Link //@ts-ignore
                href={`/work/${projectList[projectObj.id + 1].title.toLowerCase()}`}
                className="sub-heading absolute -bottom-[4.8rem] right-0 z-10 flex w-fit items-center gap-extra-small font-thin text-primary90  dark:text-primary1 max-tablet:text-body  max-mobile-large:text-body max-mobile-large:leading-body"
              >
                <P className="relative whitespace-nowrap font-['HFF_Ultrasound'] font-thin leading-heading before:absolute before:bottom-0 before:left-[50%] before:-z-10 before:w-full before:max-w-0 before:origin-center before:border-b-2 before:border-tertiary40 before:duration-medium hover:before:left-0 hover:before:max-w-full before:dark:border-tertiary40 max-tablet:text-sub-heading max-mobile-large:text-body">
                  {t('nextProject')}
                </P>{' '}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
