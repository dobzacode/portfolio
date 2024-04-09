import ProjectContent from '@/components/projects/project/project-content';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { projectName }
}: {
  params: { projectName: string };
}) {
  const t = await getTranslations(`metadata.${projectName}`);

  return {
    metadataBase: new URL('https://corentinkitteL.fr'),
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: `url/${projectName}.jpg`,
      title: t('title'),
      description: t('description')
    },
    twitter: {
      images: `url/${projectName}.jpg`,
      title: t('title'),
      description: t('description')
    }
  };
}

export default async function HomePage({
  params: { locale },
  params
}: {
  params: { locale: string; projectName: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ProjectContent params={params}></ProjectContent>
    </>
  );
}
