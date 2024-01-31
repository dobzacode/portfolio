import createMiddleware from 'next-intl/middleware';
import { locales, pathnames } from './navigation';

export default createMiddleware({
  localePrefix: 'as-needed',
  defaultLocale: 'fr',
  locales,
  pathnames
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
