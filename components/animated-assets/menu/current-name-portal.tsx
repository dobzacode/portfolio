import { usePathname } from '@/navigation';
import { useEffect, useRef, useState } from 'react';
import NamePortal from './name-portal';

function getRandomRotationClass() {
  const rotations = ['90deg', '0deg', '-90deg'];
  const randomIndex = Math.floor(Math.random() * rotations.length);
  return rotations[randomIndex];
}

function getRandomFromArrayWithoutRepetition(array: string[], lastUsed: string | null) {
  const filteredArray = array.filter((item) => item !== lastUsed);
  const randomIndex = Math.floor(Math.random() * filteredArray.length);
  return filteredArray[randomIndex];
}

const determineAssetValue = (text: string | null, lastUsed: string | null) => {
  const valueWithoutSlash = text?.replace('/', '');

  switch (valueWithoutSlash) {
    case 'about':
      return getRandomFromArrayWithoutRepetition(
        ['full-stack', 'ui', 'web-design', 'web-dev'],
        lastUsed
      );

    default:
      return getRandomFromArrayWithoutRepetition(['corentin', 'kittel'], lastUsed);
  }
};

export default function CurrentNamePortal({ actualHover }: { actualHover: string | null }) {
  const pathname = usePathname();

  const [lastUsedAssetName, setLastUsedAssetName] = useState<string | null>(null);
  const [assetName, setAssetName] = useState<string | null>(
    determineAssetValue(actualHover ? actualHover : pathname, lastUsedAssetName)
  );

  const namePortalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAssetName = determineAssetValue(
        actualHover ? actualHover : pathname,
        lastUsedAssetName
      );
      setAssetName(newAssetName);
      setLastUsedAssetName(newAssetName);

      if (namePortalRef.current) {
        namePortalRef.current.style.rotate = getRandomRotationClass();
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [actualHover, pathname, lastUsedAssetName]);

  console.log(assetName);

  return (
    <NamePortal
      ref={namePortalRef}
      text={
        !assetName
          ? getRandomFromArrayWithoutRepetition(
              ['full-stack', 'ui', 'web-design', 'web-dev', 'corentin', 'kittel'],
              lastUsedAssetName
            )
          : assetName
      }
      className={`relative -mt-large h-[710px] w-[710px]`}
    ></NamePortal>
  );
}
