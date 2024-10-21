import { Providers } from '@/components/wrapper/dark-mode/providers';

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
    <html lang={locale} suppressHydrationWarning>
      <body className="  relative h-full w-full overflow-x-hidden bg-primary1 duration-medium dark:bg-primary99">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
            <div className="noise max-mobile-large:hidden"></div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
