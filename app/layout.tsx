import { Providers } from '@/components/wrapper/dark-mode/providers';

import DarkModeButton from '@/components/wrapper/dark-mode/darkmode-button';
import { Jura } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const jura = Jura({
  subsets: ['latin'],
  display: 'swap'
});

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://corentinkittel.fr'),
    title: 'Corentin Kittel | Développeur Full-Stack',
    description:
      "Corentin Kittel, développeur full-stack basé à Lyon avec 3 ans d'expérience dans la création d'applications web performantes et modernes. Spécialisé en NextJS, React, AWS, et bien plus. Découvrez mon portfolio pour explorer mes projets et compétences en développement web, DevOps, et design.",
    opengraph: {
      title: 'Corentin Kittel | Développeur Full-Stack',
      description:
        "Corentin Kittel, développeur full-stack basé à Lyon avec 3 ans d'expérience dans la création d'applications web performantes et modernes. Spécialisé en NextJS, React, AWS, et bien plus. Découvrez mon portfolio pour explorer mes projets et compétences en développement web, DevOps, et design.",
      images: 'url/opengraph-image.jpg'
    },
    twitter: {
      title: 'Corentin Kittel | Développeur Full-Stack',
      description:
        "Corentin Kittel, développeur full-stack basé à Lyon avec 3 ans d'expérience dans la création d'applications web performantes et modernes. Spécialisé en NextJS, React, AWS, et bien plus. Découvrez mon portfolio pour explorer mes projets et compétences en développement web, DevOps, et design.",
      images: 'url/twitter-image.jpg'
    }
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className={jura.className}>
      <body className=" relative h-full w-full  justify-center  duration-medium">
        <Providers>
          <DarkModeButton className="fixed right-small top-small z-50 backdrop-blur-lg" />
          {children}
          <div className="noise max-mobile-large:hidden"></div>
        </Providers>
      </body>
    </html>
  );
}
