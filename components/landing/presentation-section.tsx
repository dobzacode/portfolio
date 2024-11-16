import { FadeInVariant } from '../framer/div-variants';
import InviewWrapper from '../framer/inview-wrapper';
import ProfilPicture from './profil-picture';

export default function PresentationSection() {
  return (
    <section className="flex flex-col gap-medium laptop:!pt-0" id="a-propos">
      <ProfilPicture className="max-laptop:hidden" />
      <div className="flex flex-col gap-small">
        <InviewWrapper
          variant={FadeInVariant}
          tag="h2"
          className="sub-heading font-bold laptop:hidden"
        >
          A propos de moi
        </InviewWrapper>
        <InviewWrapper variant={FadeInVariant} tag="p" className="body">
          Développeur full-stack passionné par la création d&apos; expériences digitales robustes et
          scalables, je me consacre à chaque étape du développement, de la conception au
          déploiement. <br />
          <br />
          Fort de trois ans d&apos;expérience, j&apos;attache une grande importance aux bonnes
          pratiques en matière d&apos; UX/UI et de performance pour construire des applications
          intuitives et accessibles. <br />
          <br />
          Actuellement freelance, j&apos;accompagne mes clients dans le développement full-stack et
          le web design en combinant mes compétences en <strong>DevOps</strong> et en{' '}
          <strong>cloud computing</strong>. <br />
          <br />
          Je suis motivé par le défi technique, avec un goût marqué pour les solutions qui allient
          design soigné et ingénierie fiable.
        </InviewWrapper>
      </div>
    </section>
  );
}
