import { ProjectInformation } from '@/assets/project/project-list';
import { mdiGithub, mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';

export default function ProjectCard({
  name,
  description,
  competences,
  github,
  website,
  duration
}: ProjectInformation) {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-small border border-tertiary80/30 duration-medium hover:shadow-inner hover:shadow-tertiary80/30 dark:border-tertiary5/10 dark:bg-tertiary5/5 dark:hover:shadow-tertiary5/10">
      <div className="flex  h-full flex-col items-start gap-medium px-small py-sub-medium">
        <div className="flex flex-col gap-extra-small">
          <p className="sub-heading font-bold">{name}</p>
          <p className="body-sm opacity-80">{duration}</p>
          <p className="body-sm">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {competences.map((competence) => (
            <p
              className="caption text-tertiary99 rounded-full bg-tertiary10 px-4 py-2  dark:bg-tertiary80/20"
              key={`${competence}-competence-section`}
            >
              {competence}
            </p>
          ))}
        </div>
        <div className="mt-auto flex gap-extra-small ">
          <a
            className="caption flex items-center gap-1 rounded-full  bg-tertiary90 px-4 py-2 text-white"
            href={website}
          >
            <Icon path={mdiWeb} size={1} />
            Website
          </a>
          <a
            className="caption flex items-center gap-1 rounded-full  bg-tertiary90 px-4 py-2 text-white"
            href={github}
          >
            <Icon path={mdiGithub} size={1} />
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
