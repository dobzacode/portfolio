import Corentin from '@/components/animated-assets/corentin';
import { Header } from '@/components/ui/header/header';
import { Providers } from '@/components/wrapper/dark-mode/providers';
import { FramerMotionWrapper } from '@/components/wrapper/framer-motion-wrapper';
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
    console.log(error);
    notFound();
  }

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="relative h-full  w-full overflow-x-hidden bg-primary1 duration-medium dark:bg-primary99">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <FramerMotionWrapper>
              <Corentin></Corentin>
              <Header
                size={'large'}
                textColor={'neutral'}
                className="  w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
              ></Header>
              {children}
              <div className="noise"></div>
            </FramerMotionWrapper>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
