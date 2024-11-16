'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useScrollSpy from '../hooks/use-scroll-spy';

const id = [
  'a-propos',
  'experiences',
  'formations',
  'certifications',
  'competences',
  'personnels',
  'professionnels'
];

interface NavigationProps {
  sectionIds: string[];
  title: string;
}

const NavigationSection = ({ sectionIds, title }: NavigationProps) => {
  const activeSection = useScrollSpy(id, -100);

  const calculateProgress = (section: string) => {
    const index = sectionIds.indexOf(section);
    if (!activeSection) return 0;
    if (
      !sectionIds.some((id) => id === activeSection) &&
      id.indexOf(activeSection) > id.indexOf(sectionIds[sectionIds.length - 1])
    )
      return 1;
    return Math.max((index + 1) / sectionIds.length - 0.05, 0);
  };

  const handleScrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const yOffset = -window.innerHeight * 0.2;
      const yPosition = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col gap-small">
      <Link
        className={cn(
          'heading text-tertiary99 whitespace-nowrap font-bold tracking-tight duration-medium hover:text-black dark:text-white dark:hover:text-white',
          !sectionIds.some((id) => id === activeSection) && 'text-black/60 dark:text-white/60'
        )}
        href={`#${sectionIds[0]}`}
      >
        {title}
      </Link>
      <div className="relative flex pl-small">
        <motion.div
          className="glowy-shadow w-2 rounded-small bg-tertiary40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: calculateProgress(activeSection) }}
          transition={{ duration: 0.5 }}
          style={{ originY: 0 }}
        />
        <ul className="relative flex flex-col gap-extra-small">
          {sectionIds.map((sectionId) => (
            <li
              key={sectionId}
              className={cn(
                'pl-4',
                activeSection === sectionId ? 'origin-top-left [&>a]:text-[2rem]' : null
              )}
            >
              <Link
                href={`#${sectionId}`}
                className={cn(
                  'body duration-medium',
                  activeSection === sectionId
                    ? '  text-black dark:text-white'
                    : 'text-black/60 dark:text-white/60'
                )}
                onClick={(e) => handleScrollToSection(sectionId, e)}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NavigationSection;
