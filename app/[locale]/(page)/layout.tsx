import { Header } from '@/components/ui/header/header';
import SplashScreen from '@/components/ui/splash-screen/splash-screen';
import FramerMotionWrapper from '@/components/wrapper/framer-motion-wrapper';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

export async function generateMetadata() {
  const t = await getTranslations('metadata.landing');

  return {
    metadataBase: new URL('https://corentinkitteL.fr'),
    title: t('title'),
    description: t('description'),
    opengraph: {
      title: t('title'),
      description: t('description'),
      images: 'url/opengraph-image.jpg'
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: 'url/twitter-image.jpg'
    }
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SplashScreen></SplashScreen>
      <Header size={'large'} textColor={'neutral'} className=" flex"></Header>
      <FramerMotionWrapper>{children}</FramerMotionWrapper>
    </>
  );
}
