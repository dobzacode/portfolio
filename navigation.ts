import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',

  '/?menu=true': '/?menu=true',

  '/about': {
    en: '/about',
    fr: '/a-propos'
  },

  '/about?menu=true': {
    en: '/about?menu=true',
    fr: '/a-propos?menu=true'
  },

  '/work': {
    en: '/work',
    fr: '/projets'
  },

  '/work?menu=true': {
    en: '/work?menu=true',
    fr: '/projets?menu=true'
  },

  '/contact': '/contact',

  '/contact?menu=true': '/contact?menu=true',

  '/legal/informations': '/legal/informations',

  '/legal/informations?menu=true': '/legal/informations?menu=true',

  '/legal/privacy': {
    en: '/legal/privacy',
    fr: '/legal/confidentialite'
  },

  '/legal/privacy?menu=true': {
    en: '/legal/privacy?menu=true',
    fr: '/legal/confidentialite?menu=true'
  }
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
