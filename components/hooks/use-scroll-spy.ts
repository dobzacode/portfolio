'use client';

import { useEffect, useState } from 'react';

const useScrollSpy = (sectionIds: string[], yOffset = 0) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.4;

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold + yOffset && rect.bottom >= threshold + yOffset) {
            setActiveId(sectionIds[i]);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, yOffset]);

  return activeId;
};

export default useScrollSpy;
