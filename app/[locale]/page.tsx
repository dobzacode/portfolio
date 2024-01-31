
import { getLocale, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metadata.landing');
  const locale = await getLocale();

  return {
    title: t('title'),
    description: t('description'),
    
  };
}

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main>
   
    </main>
  );
}
