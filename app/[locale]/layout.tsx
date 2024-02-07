import { Providers } from '@/components/wrapper/dark-mode/providers';

import LoadingBar from '@/components/animated-assets/loading-bar';
import CustomCursor from '@/components/ui/custom-cursor';
import { Header } from '@/components/ui/header/header';
import SplashScreen from '@/components/ui/splash-screen/splash-screen';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import './globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: 'en' | string };
}) {
  let messages;
  try {
    messages =
      locale !== 'en'
        ? (await import(`../../locales/fr.json`)).default
        : (await import(`../../locales/en.json`)).default;
  } catch (error) {
    error;
    notFound();
  }

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning style={{ colorScheme: 'dark' }}>
      <body className="  relative h-full w-full overflow-x-hidden bg-primary1 duration-medium dark:bg-primary99">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <SplashScreen></SplashScreen>
            <LoadingBar></LoadingBar>
            <Header
              size={'large'}
              textColor={'neutral'}
              className=" relative z-50 w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
            ></Header>

            {children}
            <div className="noise max-mobile-large:hidden"></div>
            <CustomCursor></CustomCursor>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
