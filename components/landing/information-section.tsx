import { CardInformation } from '@/assets/project/information-list';
import { FadeInVariant } from '../framer/div-variants';
import InviewWrapper from '../framer/inview-wrapper';
import InformationCard from './information-card';
import Zapper from './zapper';

export default function InformationSection({
  informations,
  title,
  isInverted,
  id
}: {
  informations: CardInformation[];
  title: string;
  isInverted?: boolean;
  id: string;
}) {
  return (
    <div id={id} className="flex flex-col gap-small  ">
      <InviewWrapper
        viewport={{ once: true, margin: '0% 0px -10% 0px' }}
        variant={FadeInVariant}
        tag="h2"
        className="sub-heading font-bold"
      >
        {title}
      </InviewWrapper>

      <Zapper isInverted={isInverted} i={informations.length}>
        <div className="flex min-h-[12rem] w-full flex-col gap-extra-small mobile-large:min-h-[16rem] laptop:min-h-[20rem] ">
          {informations.map((information) => (
            <InformationCard key={information.company} {...information}></InformationCard>
          ))}
        </div>
      </Zapper>
    </div>
  );
}
