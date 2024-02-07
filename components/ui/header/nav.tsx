'use client';
import { cn } from '@/lib/utils';
import Icon from '@mdi/react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import React, { FC, HTMLProps, useEffect, useState } from 'react';

import CurrentNamePortal from '@/components/animated-assets/menu/current-name-portal';
import useBetterMediaQuery from '@/components/hooks/use-better-media-query';
import DarkModeButton from '@/components/wrapper/dark-mode/darkmode-button';
import { Link, usePathname, useRouter } from '@/navigation';
import { mdilMenu, mdilPlus } from '@mdi/light-js';
import { useTranslations } from 'next-intl';
import { useParams, useSearchParams } from 'next/navigation';
import AnimatedLogo from '../branding/animated-logo';
import P from '../text/p';
import LangageSwitch from './langage-switch';
import NavLink from './nav-link';

interface NavProps extends HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  linkSize: 'small' | 'medium' | 'large' | null | undefined;
  intent:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | null
    | undefined;
}

const navLinks = [
  { href: '/', name: 'home' },
  { href: '/about', name: 'about' },
  { href: '/work', name: 'work' },
  { href: '/contact', name: 'contact' }
];

const Nav: FC<NavProps> = ({ className, intent }) => {
  const searchParams = useSearchParams();

  const isLaptop = useBetterMediaQuery('(min-width: 1024px)');

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const params = useParams();

  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations('navigation.primaryNavigation');

  const menuItemVariant: Variants = {
    hidden: { y: -100 },
    visible: (i: number) => ({
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.115 + splashDelay
      }
    }),
    exit: { opacity: 0, transition: { duration: 1 } }
  };

  const triggerMenu = () => {
    if (showMenu) {
      //@ts-ignore
      router.replace(`${pathname.replace('[projectName]', params.projectName)}`);
      setTimeout(() => {
        setShowAnimation(false);
      }, 1400);
    } else {
      //@ts-ignore
      router.replace(`${pathname.replace('[projectName]', params.projectName)}?menu=true`);
      setTimeout(() => {
        setShowAnimation(true);
      }, 4000);
    }
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1400);
    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    setShowMenu(searchParams.get('menu') ? true : false);
  }, [searchParams]);

  return (
    <header className={cn(className)}>
      <div className=" relative z-30 flex w-full items-center justify-between max-tablet:px-sub-large  max-mobile-large:px-small  tablet:px-sub-large laptop:px-large">
        <Link href="/" className="-ml-sub-medium flex items-center gap-sub-large laptop:gap-large">
          <AnimatedLogo splashDelay={splashDelay} className="w-20 "></AnimatedLogo>
          <AnimatePresence mode="wait">
            {showMenu && (
              <motion.div
                className="relative z-50 w-full"
                key={`corentin kittel animated`}
                initial={{ y: '-200%' }}
                animate={{ y: '0', transition: { type: 'spring' } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
              >
                <P className="sub-heading relative z-50 w-full whitespace-nowrap text-tertiary90   opacity-50 dark:text-tertiary1 max-tablet:hidden ">
                  Corentin Kittel
                </P>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
        <div className="relative flex items-center gap-small pr-sub-large text-primary90 dark:text-primary1 max-tablet:gap-4">
          <motion.div variants={menuItemVariant} initial="hidden" animate="visible" custom="1">
            <LangageSwitch></LangageSwitch>
          </motion.div>
          <motion.div variants={menuItemVariant} initial="hidden" animate="visible" custom="2">
            <DarkModeButton className="max-tablet:scale-75"></DarkModeButton>
          </motion.div>
          <motion.div
            variants={menuItemVariant}
            initial="hidden"
            animate="visible"
            custom="3"
            className="relative h-16"
          >
            <AnimatePresence>
              {!showMenu ? (
                <motion.button
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  exit={{ opacity: 0 }}
                  className="absolute h-fit w-fit  "
                  onClick={() => triggerMenu()}
                >
                  <Icon
                    path={mdilMenu}
                    className="  text-primary90 duration-fast hover:scale-105 dark:text-primary1 max-tablet:scale-75"
                    size={2.5}
                  ></Icon>
                </motion.button>
              ) : (
                <motion.button
                  key="close"
                  initial={{ opacity: 0, rotate: 360 }}
                  animate={{ opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="absolute h-fit w-fit  "
                  onClick={() => triggerMenu()}
                >
                  <Icon
                    path={mdilPlus}
                    className="  rotate-45 text-primary90 duration-fast hover:scale-105 dark:text-primary1 max-tablet:scale-75"
                    size={2.5}
                  ></Icon>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <div className="relative -z-20 w-full self-start">
        <AnimatePresence mode="wait">
          {showMenu && (
            <motion.div
              key="specialMenu"
              className="flex justify-between  px-large pt-medium max-tablet:px-sub-large max-mobile-large:px-extra-small  tablet:pt-large  laptop:gap-medium  laptop-large:gap-extra-large"
              exit={{
                opacity: 0,
                x: '-50%',
                transition: { duration: 1, ease: 'easeIn' }
              }}
            >
              <nav
                key={'navigation'}
                className={cn(' relative z-40 flex  w-fit items-start self-start    ')}
              >
                <ul className={' flex  flex-col  justify-center '}>
                  {navLinks.map((link, i) => {
                    return (
                      <div
                        className={`relative z-50 flex h-full w-fit flex-row-reverse items-center gap-extra-small ${
                          showMenu ? 'overflow-hidden' : 'overflow-visible'
                        }`}
                        key={link.name}
                      >
                        <motion.div
                          className="relative z-50 w-full"
                          key={`${link.name} animated`}
                          initial={{ x: '-200%' }}
                          animate={{ x: '0', transition: { duration: 2 - 1.5, delay: i + 0.5 } }}
                        >
                          <NavLink
                            isLi={true}
                            className="leading-small heading--extra-large relative z-50 w-full whitespace-nowrap font-['HFF_Ultrasound'] font-thin  text-tertiary90 dark:text-tertiary1 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large "
                            hover={true}
                            index={i}
                            intent={intent}
                            currentNavStyle={intent}
                            href={link.href}
                          >
                            {t(link.name).toUpperCase().replace(/-/g, ' ')}
                          </NavLink>
                        </motion.div>
                        <motion.div
                          key={`${link.name} border`}
                          initial={{ maxHeight: 0, opacity: 0 }}
                          animate={{
                            maxHeight: [0, 100, 100, 0],
                            opacity: [0, 1, 1, 0],
                            transition: {
                              maxHeight: {
                                duration: 4 - 1.5,
                                ease: 'easeIn',
                                delay: i,
                                times: [0, 0.25, 0.75, 1]
                              },
                              opacity: { duration: 4 - 1.5, delay: i, times: [0, 0.05, 0.99, 1] }
                            }
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.5, delay: i * 0.115 }
                          }}
                          className="glowy-shadow relative z-10 h-[10rem] bg-tertiary40 p-1 max-tablet:p-[2px] max-mobile-large:h-[5rem]"
                        ></motion.div>
                      </div>
                    );
                  })}
                </ul>
              </nav>

              {isLaptop && (
                <>
                  {!showAnimation && (
                    <div className={`relative -mt-large h-[710px] w-[710px] `}></div>
                  )}
                  {showAnimation && <CurrentNamePortal></CurrentNamePortal>}
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Nav;
