import { ProjectInformation } from '@/assets/project/project-list';
import { FadeInVariant } from '../framer/div-variants';
import InviewWrapper from '../framer/inview-wrapper';
import ProjectCard from './project-card';
import ZapperVertical from './zapper-vertical';

export default function ProjectSection({
  informations,
  title,

  id
}: {
  informations: ProjectInformation[];
  title: string;
  isInverted?: boolean;
  id?: string;
}) {
  return (
    <div id={id} className="flex flex-col gap-small  ">
      <InviewWrapper variant={FadeInVariant} tag="h2" className="sub-heading font-bold">
        {title}
      </InviewWrapper>
      <ZapperVertical>
        <div className="grid gap-small mobile-large:grid-cols-2">
          {informations.map((information) => (
            <ProjectCard key={information.name} {...information} />
          ))}
        </div>
      </ZapperVertical>
    </div>
  );
}
