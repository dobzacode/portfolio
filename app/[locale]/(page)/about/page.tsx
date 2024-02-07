import AboutContent from '@/components/about/about-content';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.about');

  return {
    title: t('title'),
    description: t('description')
    // openGraph: {
    //   images: await generateOpenGraphImage(locale !== '/en' ? '' : locale)
    // }
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <AboutContent></AboutContent>
    </>
  );
}
