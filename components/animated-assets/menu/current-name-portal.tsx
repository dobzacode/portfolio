import { usePathname } from '@/navigation';
import { useEffect, useRef, useState } from 'react';
import NamePortal from './name-portal';

function getRandomRotationClass() {
  const rotations = ['90deg', '0deg', '-90deg'];
  const randomIndex = Math.floor(Math.random() * rotations.length);
  return rotations[randomIndex];
}

function getRandomFromArray(array: string[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const determineAssetValue = (actualHover: string | null) => {
  const valueWithoutSlash = actualHover?.replace('/', '');
  switch (valueWithoutSlash) {
    case 'about':
      return 'kittel';
    default:
      return getRandomFromArray(['corentin', 'kittel']);
  }
};

export default function CurrentNamePortal({ actualHover }: { actualHover: string | null }) {
  const pathname = usePathname();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [assetName, setAssetName] = useState<string | null>(
    determineAssetValue(actualHover ? pathname : actualHover)
  );

  const [showPortal, setShowPortal] = useState<boolean>(false);

  const namePortalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPortal(true);
    }, 6000);
    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAssetName(determineAssetValue(actualHover));
      if (namePortalRef.current && isPlaying) {
        namePortalRef.current.style.rotate = getRandomRotationClass();
        setIsPlaying(false);
      }
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  });

  console.log(showPortal);

  if (!showPortal) return <div className={`relative h-[710px] w-[710px]`}></div>;

  return (
    <NamePortal
      setIsPlaying={() => setIsPlaying(true)}
      ref={namePortalRef}
      text={assetName ? assetName : 'corentin'}
      className={`relative h-[710px] w-[710px]`}
    ></NamePortal>
  );
}
