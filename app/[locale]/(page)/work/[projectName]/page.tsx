import ProjectContent from '@/components/projects/project/project-content';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { projectName }
}: {
  params: { projectName: string };
}) {
  const t = await getTranslations(`metadata.${projectName}`);

  console.log();

  return {
    title: t('title'),
    description: t('description')
    // openGraph: {
    //   images: await generateOpenGraphImage(locale !== '/en' ? '' : locale)
    // }
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
