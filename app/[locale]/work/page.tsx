import { Header } from '@/components/ui/header/header';
import { H1 } from '@/components/ui/text/h1';
import { useSearchParams } from 'next/navigation';

export default function Page({}) {
  const searchParams = useSearchParams();

  return (
    <>
      <Header
        size={'large'}
        textColor={'neutral'}
        className=" relative z-50 w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
      ></Header>
      <main
        className={`relative z-40 flex w-screen flex-col  items-center justify-center  bg-transparent pt-medium  duration-slowest ${
          searchParams.get('menu') ? 'translate-x-[20%] opacity-0 ' : 'opacity-100 delay-1000'
        }`}
      >
        <H1 textType={'heading--extra-large'}>TEST</H1>
      </main>
    </>
  );
}
