import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',

  '/about': {
    en: '/about',
    fr: '/a-propos'
  },
  
  'work' : {
    en: '/work',
    fr: '/projets'
  },

  'contact': '/contact',

  '/legal/informations': '/legal/informations',

  '/legal/privacy': {
    en: '/legal/privacy',
    fr: '/legal/confidentialite'
  },

} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
