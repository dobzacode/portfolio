import { FadeInVariant } from '../framer/div-variants';
import InviewWrapper from '../framer/inview-wrapper';

const competences = [
  'React',
  'NextJS',
  'Typescript',
  'Angular',
  'NestJS',
  'FastAPI',
  'Python',
  'Express',
  'TailwindCSS',
  'Drizzle',
  'Prisma',
  'SQLalchemy',
  'PostgreSQL',
  'Docker',
  'Terraform',
  'Github Actions',
  'Figma',
  'AWS'
];

export default function CompetenceSection() {
  return (
    <div className="flex flex-col gap-small  " id="competences">
      <InviewWrapper variant={FadeInVariant} tag="h2" className="sub-heading font-bold">
        Compétences techniques
      </InviewWrapper>
      <div className="flex flex-wrap gap-2  ">
        {competences.map((competence, i) => (
          <InviewWrapper
            variant={{
              initial: {
                opacity: 0,
                y: -10
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.05,
                  duration: 0.5
                }
              },
              enter: {
                opacity: 0,
                y: -100
              }
            }}
            className="caption rounded-full bg-tertiary90 px-4 py-2 text-tertiary1  dark:bg-tertiary80/20"
            key={`${competence}-competence-section`}
          >
            {competence}
          </InviewWrapper>
        ))}
      </div>
    </div>
  );
}
