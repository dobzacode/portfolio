import { Header } from '@/components/ui/header/header';
import { H1 } from '@/components/ui/text/h1';

export default function Page({}) {
  return (
    <>
      <Header
        size={'large'}
        textColor={'neutral'}
        className="  w-full max-w-full px-sub-large pt-[40px] tablet:px-large tablet:pt-large"
      ></Header>
      <H1 textType={'heading--extra-large'}>TEST</H1>
    </>
  );
}
