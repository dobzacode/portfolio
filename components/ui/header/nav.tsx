'use client';
import { cn } from '@/lib/utils';
import Icon from '@mdi/react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import React, { FC, HTMLProps, useState } from 'react';

import CK from '@/components/animated-assets/ck';
import DarkModeButton from '@/components/wrapper/dark-mode/darkmode-button';
import { usePathname, useRouter } from '@/navigation';
import { mdilMenu, mdilPlus } from '@mdi/light-js';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import AnimatedLogo from '../branding/animated-logo';
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
  { href: '/about', name: 'about' },
  { href: '/work', name: 'work' },
  { href: '/contact', name: 'contact' }
];

const Nav: FC<NavProps> = ({ className, intent }) => {
  const searchParams = useSearchParams();

  const [showMenu, setShowMenu] = useState<boolean>(searchParams.get('menu') ? true : false);

  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

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
    console.log(showMenu);
    if (showMenu) {
      router.replace(pathname);
    } else {
      // @ts-ignore
      router.replace(`${pathname}?menu=true`);
    }
    setShowMenu(!showMenu);
  };

  return (
    <header className={cn(className)}>
      <div className=" relative z-30 flex w-full items-center justify-end px-large max-tablet:px-sub-large max-mobile-large:justify-between max-mobile-large:px-small">
        <div className="max-mobile-large:hidden">
          <CK
            splashDelay={splashDelay}
            className="absolute -left-sub-large -top-[11.6rem] w-[28rem] dark:hidden  max-tablet:-top-[8rem] max-tablet:w-[20rem] "
          ></CK>
          <CK
            splashDelay={splashDelay}
            isDark={true}
            className="absolute -left-sub-large -top-[11.6rem]  hidden w-[28rem]  dark:block max-tablet:-top-[8rem] max-tablet:w-[20rem] "
          ></CK>
        </div>
        <AnimatedLogo splashDelay={splashDelay} className="w-24 mobile-large:hidden"></AnimatedLogo>
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
        <AnimatePresence mode="popLayout">
          {showMenu && (
            <motion.div
              key="specialMenu"
              exit={{
                opacity: 0,
                x: '-20%',
                transition: { duration: 1.5, ease: 'easeIn' }
              }}
            >
              <nav
                key={'navigation'}
                className={cn(
                  ' relative z-40 flex h-[75vh] w-fit items-center self-start px-large max-tablet:px-sub-large  max-mobile-large:items-start max-mobile-large:px-extra-small max-mobile-large:pt-large '
                )}
              >
                <ul className={' flex  flex-col  justify-center '}>
                  {navLinks.map((link, i) => {
                    return (
                      <div
                        className={`flex h-full w-fit flex-row-reverse items-center gap-extra-small ${
                          showMenu ? 'overflow-hidden' : 'overflow-visible'
                        }`}
                        key={link.name}
                      >
                        <motion.div
                          className="w-full"
                          key={`${link.name} animated`}
                          initial={{ x: '-200%' }}
                          animate={{ x: '0', transition: { duration: 2 - 1.5, delay: i + 0.5 } }}
                        >
                          <NavLink
                            isLi={true}
                            className="leading-small heading--extra-large w-full font-['HFF_Ultrasound'] font-thin text-tertiary90 dark:text-tertiary1 max-mobile-large:text-heading-large max-mobile-large:leading-heading-large "
                            hover={true}
                            index={i}
                            intent={intent}
                            currentNavStyle={intent}
                            href={link.href}
                          >
                            {t(link.name).toUpperCase()}
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
                          className="glowy-shadow relative z-10 h-[10rem] bg-tertiary40 p-1 max-mobile-large:h-[5rem] max-mobile-large:p-[0.8px]"
                        ></motion.div>
                      </div>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Nav;
