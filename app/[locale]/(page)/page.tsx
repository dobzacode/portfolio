import HomeContent from '@/components/home/home-content';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({}) {
  const t = await getTranslations('about');
  console.log(t('title'));

  return (
    <>
      <HomeContent></HomeContent>
    </>
  );
}
