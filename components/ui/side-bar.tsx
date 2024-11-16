import { mdiGithub, mdiLinkedin, mdiMail } from '@mdi/js';
import Icon from '@mdi/react';
import { FadeInVariant } from '../framer/div-variants';
import InviewWrapper from '../framer/inview-wrapper';
import IntroSection from '../landing/intro-section';
import NavigationSection from './navigation-section';

export default function SideBar() {
  return (
    <InviewWrapper
      variant={FadeInVariant}
      tag="aside"
      className="top-large flex flex-col gap-medium laptop:sticky laptop:h-[90vh] laptop:gap-large"
    >
      <IntroSection />
      <nav className="flex flex-col gap-small max-laptop:hidden">
        <NavigationSection
          sectionIds={['a-propos', 'experiences', 'formations', 'certifications', 'competences']}
          title="Informations générales"
        />
        <NavigationSection sectionIds={['personnels', 'professionnels']} title="Mes projets" />
      </nav>
      <ul className="mt-auto flex h-full items-end gap-small [&>li:hover]:opacity-75 [&>li]:duration-fast">
        <li>
          <a
            href="github.com/dobzacode"
            className="body font-medium text-primary90 dark:text-primary1 max-tablet:text-body max-mobile-large:text-body max-mobile-large:leading-body"
          >
            <Icon path={mdiGithub} size={2}></Icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/corentin-kittel-a404a5300/?originalSubdomain=fr"
            className="body font-medium text-primary90 dark:text-primary1 max-tablet:text-body max-mobile-large:text-body max-mobile-large:leading-body"
          >
            <Icon path={mdiLinkedin} size={2}></Icon>
          </a>
        </li>
        <li>
          <a
            href="mailto:contact@corentinkittel.fr"
            className="body font-medium text-primary90 dark:text-primary1 max-tablet:text-body max-mobile-large:text-body max-mobile-large:leading-body"
          >
            <Icon path={mdiMail} size={2}></Icon>
          </a>
        </li>
      </ul>
    </InviewWrapper>
  );
}
