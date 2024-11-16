import { CardInformation } from '@/assets/project/information-list';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function InformationCard({ company, position, duration, image }: CardInformation) {
  return (
    <div className="flex min-h-[10rem] items-center justify-between gap-small rounded-small border border-tertiary80/30 px-medium py-small duration-medium hover:shadow-inner hover:shadow-tertiary80/30 dark:border-tertiary5/10 dark:bg-tertiary5/5 dark:hover:shadow-tertiary5/10 laptop:gap-medium">
      <div className="flex items-center gap-medium">
        {company !== 'Freelance' ? (
          <Image
            src={image}
            quality={100}
            placeholder="blur"
            className="size-20 shrink-0 rounded-full border border-tertiary80/10 object-contain p-extra-small dark:bg-white tablet:size-28"
            alt={`${company}logo`}
          ></Image>
        ) : (
          <div className="flex size-20 shrink-0  items-center justify-center rounded-full border border-tertiary80/10 object-contain p-extra-small dark:bg-white tablet:size-28">
            <p className="heading font-['HFF_Ultrasound'] text-tertiary80/80">CK</p>
          </div>
        )}
        <div className="flex h-fit flex-col justify-center ">
          <p className={cn('mobile-large:body body-sm ', 'font-bold')}>{company}</p>
          {position && <p className="mobile-large:body-sm caption text-pretty">{position}</p>}
        </div>
      </div>
      <p className="mobile-large:body caption shrink-0 whitespace-nowrap max-[366px]:shrink max-[366px]:whitespace-normal">
        {duration}
      </p>
    </div>
  );
}
