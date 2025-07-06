'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import DivWrapper from '../framer/div-wrapper';
import InviewWrapper from '../framer/inview-wrapper';

export default function Zapper({
  i,
  children,
  isInverted
}: {
  i: number;
  children: React.ReactNode;
  isInverted?: boolean;
}) {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  const height = `h-[${14 * i}rem]`;
  //h-[14rem] h-[28rem] h-[42rem] h-[56rem] h-[70rem]

  const shadowVariants = {
    initial: { maxHeight: 0, opacity: 0 },
    animate: {
      maxHeight: [0, 110 * i, 110 * i, 0],
      opacity: [0, 1, 1, 0],
      transition: {
        maxHeight: {
          duration: 2,
          ease: 'easeInOut',
          delay: 0,
          times: [0, 0.25, 0.75, 1]
        },
        opacity: { duration: 2, delay: 0, times: [0, 0.05, 0.99, 1] }
      }
    },
    exit: {
      maxHeight: [0, 110 * i, 110 * i, 0],
      opacity: [0, 1, 1, 0],
      transition: {
        maxHeight: {
          duration: 1.5,
          ease: 'easeInOut',
          delay: 0,
          times: [0, 0.25, 0.75, 1]
        },
        opacity: { duration: 1.5, delay: 0, times: [0, 0.05, 0.99, 1] }
      }
    }
  };

  return (
    <div
      className={cn(
        `group relative z-50 flex h-fit w-full gap-extra-small overflow-hidden`,
        isInverted ? 'ml-2 flex-row items-center' : '-ml-4 flex-row-reverse items-center'
      )}
    >
      <DivWrapper
        className="relative z-50 w-full"
        variant={{
          initial: { x: !isInverted ? '-150%' : '150%' },
          animate: isEnter
            ? { x: '0', transition: { duration: 0.5, delay: 0.5 } }
            : { x: !isInverted ? '-150%' : '150%' },
          exit: { x: !isInverted ? '-150%' : '150%', transition: { duration: 1, delay: 0.5 } }
        }}
      >
        {children}
      </DivWrapper>

      <InviewWrapper
        //eslint-disable-next-line
        onViewportEnter={(_: any) => setIsEnter(true)}
        variant={shadowVariants}
        className={cn(
          'glowy-shadow relative z-[60] -mt-3  bg-tertiary40 p-1 max-tablet:-mt-2  max-mobile-large:-mt-4  max-mobile-large:p-[0.2rem]',
          height
        )}
      ></InviewWrapper>
    </div>
  );
}
