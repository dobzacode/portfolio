import HomeContent from '@/components/home/home-content';
import { unstable_setRequestLocale } from 'next-intl/server';



export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HomeContent></HomeContent>
    </>
  );
}
