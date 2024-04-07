import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '../../../navigation';
import Button from '../button/button';
import P from '../text/p';

export default function LangageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const switchLangage = (locale: 'fr' | 'en') => {
    router.push({ pathname, params: params as any }, { locale });
  };

  return (
    <div className="flex items-center gap-extra-small pb-[0.6rem] ">
      <span className="sub-heading max-tablet:body flex gap-2 text-primary90 dark:text-primary1 tablet:text-[2rem] tablet:leading-[2rem]">
        <Button
          onClick={() => (locale !== 'en' ? switchLangage('en') : '')}
          className={cn(locale !== 'en' && 'opacity-50', 'hover:opacity-100')}
        >
          EN
        </Button>
        <P className="opacity-50">|</P>
        <Button
          onClick={() => (locale !== 'fr' ? switchLangage('fr') : '')}
          className={cn(locale !== 'fr' && 'opacity-50', 'hover:opacity-100')}
        >
          FR
        </Button>
      </span>
    </div>
  );
}
