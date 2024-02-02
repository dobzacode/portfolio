'use client';
import { cn } from '@/lib/utils';
import Icon from '@mdi/react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import React, { FC, HTMLProps, useRef, useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import CK from '@/components/animated-assets/ck';
import DarkModeButton from '@/components/wrapper/dark-mode/darkmode-button';
import { usePathname, useRouter } from '@/navigation';
import { mdilMenu, mdilPlus } from '@mdi/light-js';
import { useTranslations } from 'next-intl';
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

const Nav: FC<NavProps> = ({ className, linkSize, intent }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [splashDelay] = useState<4.5 | 0>(!sessionStorage.getItem('shown') ? 4.5 : 0);

  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations('navigation.primaryNavigation');

  const navRef = useRef();

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
      <div className=" absolute top-0 z-30 flex w-full items-center justify-end px-large max-tablet:px-sub-large max-mobile-large:px-small">
        <CK
          splashDelay={splashDelay}
          className="absolute -left-sub-large -top-[11.6rem] w-[28rem] dark:hidden  max-tablet:-top-[8rem] max-tablet:w-[20rem]"
        ></CK>
        <CK
          splashDelay={splashDelay}
          isDark={true}
          className="absolute -left-sub-large -top-[11.6rem]  hidden w-[28rem] dark:block"
        ></CK>
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

      <CSSTransition nodeRef={navRef} timeout={600} unmountOnExit classNames="fade" in={showMenu}>
        <nav
          ref={navRef as any}
          className={cn(
            ' relative z-40 h-full w-fit self-start pt-medium mobile-large:pt-large tablet:pt-0'
          )}
        >
          <ul className={'absolute  flex w-fit translate-y-large flex-col  justify-center'}>
            {navLinks.map((link) => {
              return (
                <NavLink
                  className="max-tablet:text-[5rem] max-tablet:leading-[5rem] "
                  key={link.name}
                  hover={true}
                  size={linkSize}
                  intent={intent}
                  currentNavStyle={intent}
                  href={link.href}
                >
                  {t(link.name).toUpperCase()}
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </CSSTransition>
    </header>
  );
};

export default Nav;
