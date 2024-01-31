'use client';
import { cn } from '@/lib/utils';
import Icon from '@mdi/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, HTMLProps, useRef, useState } from 'react';

import { mdiClose, mdiMenu } from '@mdi/js';
import { CSSTransition } from 'react-transition-group';
import Logo from '../branding/logo';

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

  const t = useTranslations('navigation.primaryNavigation');

  const navRef = useRef();

  return (
    <header className={cn(className)}>
      <div className=" absolute top-0 z-30 flex w-full items-center justify-between">
        <AnimatePresence>
          {!showMenu ? (
            <motion.button
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0 }}
              className="absolute left-small h-fit w-fit  laptop:left-large"
              onClick={() => setShowMenu(true)}
            >
              <Icon
                path={mdiMenu}
                className=" text-white duration-fast hover:scale-105"
                size={2.5}
              ></Icon>
            </motion.button>
          ) : (
            <motion.button
              key="close"
              initial={{ opacity: 0, rotate: 360 }}
              animate={{ opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="absolute left-small h-fit w-fit  laptop:left-large"
              onClick={() => setShowMenu(false)}
            >
              <Icon
                path={mdiClose}
                className=" text-white duration-fast hover:scale-105"
                size={2.5}
              ></Icon>
            </motion.button>
          )}
        </AnimatePresence>

        <div className={'fadeIn absolute  left-1/2 -translate-x-1/2 transform'}>
          <Logo
            href="/"
            intent={intent}
            className={cn(' relative z-[100]', triggerClass ? 'grow-animation' : '')}
          ></Logo>
        </div>

        <LangageSwitch></LangageSwitch>
      </div>

      <CSSTransition nodeRef={navRef} timeout={600} unmountOnExit classNames="fade" in={showMenu}>
        <nav
          ref={navRef as any}
          className={cn(
            ' relative z-40 h-full w-fit self-start pt-medium mobile-large:pt-large tablet:pt-0'
          )}
        >
          <ul className={'absolute  flex w-fit translate-y-large flex-col  justify-center'}>
            {navLinks.map((link, i) => {
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
