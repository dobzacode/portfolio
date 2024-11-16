import { certifications, experiences, formations } from '@/assets/project/information-list';
import { projects } from '@/assets/project/project-list';
import { FadeInVariant } from '@/components/framer/div-variants';
import InviewWrapper from '@/components/framer/inview-wrapper';
import CompetenceSection from '@/components/landing/competence-section';
import InformationSection from '@/components/landing/information-section';
import PresentationSection from '@/components/landing/presentation-section';
import ProjectSection from '@/components/landing/project-section';

export default async function HomePage() {
  return (
    <main className="flex max-w-[600px] flex-col [&>section]:pb-extra-small [&>section]:last:pb-0 mobile-large:[&>section]:pb-sub-large laptop:[&>section]:pb-large">
      <section className=" flex flex-col [&>*]:py-small mobile-large:[&>*]:py-medium laptop:[&>*]:py-sub-large">
        <PresentationSection />
        {[
          { title: 'Experiences', informations: experiences, id: 'experiences' },
          { title: 'Formations', informations: formations, isInverted: true, id: 'formations' },
          { title: 'Certifications', informations: certifications, id: 'certifications' }
        ].map(({ title, informations, isInverted, id }) => (
          <InformationSection
            id={id}
            key={title}
            title={title}
            informations={informations}
            isInverted={isInverted}
          />
        ))}
        <CompetenceSection />
      </section>
      <section className="flex flex-col pt-medium [&>*]:py-small mobile-large:[&>*]:py-medium laptop:[&>*]:py-sub-large">
        <div className="flex flex-col gap-sub-large" id="personnels">
          <InviewWrapper
            variant={FadeInVariant}
            className="flex flex-col items-center justify-center gap-small"
          >
            <h2 className="heading--large mx-auto font-['HFF_Ultrasound']">Mes projets</h2>
            <p className="body text-pretty text-center">
              Explorez une sélection de mes travaux, allant de mes projets personnels créatifs à des
              réalisations professionnelles, où je mets en pratique mes compétences pour offrir des
              solutions et sur mesure.
            </p>
          </InviewWrapper>
          <ProjectSection
            informations={projects.filter((p) => p.type === 'personnel')}
            title="Projets personnels"
          />
        </div>
        <ProjectSection
          informations={projects.filter((p) => p.type === 'professionnel')}
          title="Projets professionnels"
          id="professionnels"
        />
      </section>
    </main>
  );
}
