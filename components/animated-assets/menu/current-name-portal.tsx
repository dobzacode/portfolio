import { usePathname } from '@/navigation';
import { useEffect, useRef, useState } from 'react';
import NamePortal from './name-portal';

export default function CurrentNamePortal({}: {}) {
  const pathname = usePathname();

  const assetNames = ['full-stack', 'ui', 'web-design', 'web-dev'];
  const [currentIndex, setCurrentIndex] = useState<number>(
    Math.floor(Math.random() * assetNames.length)
  );

  const namePortalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % assetNames.length);

      if (namePortalRef.current) {
        namePortalRef.current.style.rotate = getRandomRotationClass();
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [pathname, assetNames.length]);

  console.log('red');

  return (
    <NamePortal
      ref={namePortalRef}
      text={assetNames[currentIndex]}
      className={`relative -mt-large h-[710px] w-[710px]`}
    ></NamePortal>
  );
}

function getRandomRotationClass() {
  const rotations = ['90deg', '0deg', '-90deg'];
  const randomIndex = Math.floor(Math.random() * rotations.length);
  return rotations[randomIndex];
}
