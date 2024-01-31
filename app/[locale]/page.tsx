import Corentin from '@/components/animated-assets/corentin';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.landing');

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <Corentin></Corentin>
    </main>
  );
}
