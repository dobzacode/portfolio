'use client';

import Layout from '@/components/Layout';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Layout>
      <main className={locale}>{/* <Corentin></Corentin> */}</main>
    </Layout>
  );
}
