'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import DivWrapper from '../framer/div-wrapper';
import InviewWrapper from '../framer/inview-wrapper';

export default function ZapperVertical({ children }: { children: React.ReactNode }) {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  const shadowVariants = {
    initial: { maxWidth: 0, opacity: 0 },
    animate: {
      maxWidth: [0, '100%', '100%', 0],
      opacity: [0, 1, 1, 0],
      transition: {
        maxWidth: {
          duration: 2 + 1,
          ease: 'easeInOut',
          delay: 0,
          times: [0, 0.25, 0.75, 1]
        },
        opacity: { duration: 2 + 1, delay: 0, times: [0, 0.05, 0.99, 1] }
      }
    },
    exit: {
      maxWidth: [0, '100%', '100%', 0],
      opacity: [0, 1, 1, 0],
      transition: {
        maxWidth: {
          duration: 1.5,
          ease: 'easeInOut',
          delay: 0,
          times: [0, 0.25, 0.75, 1]
        },
        opacity: { duration: 1.5 + 1, delay: 0, times: [0, 0.05, 0.99, 1] }
      }
    }
  };

  return (
    <div
      className={cn(
        `group relative z-50 flex h-fit w-full flex-col items-center gap-extra-small overflow-hidden max-tablet:w-full`
      )}
    >
      {' '}
      <InviewWrapper
        //eslint-disable-next-line
        onViewportEnter={(_: any) => setIsEnter(true)}
        variant={shadowVariants}
        className={cn('glowy-shadow relative z-[60] -mt-3  h-[1rem] w-[100%] bg-tertiary40 p-1')}
      ></InviewWrapper>
      <DivWrapper
        className="relative z-50 w-full"
        variant={{
          initial: { y: '-150%' },
          animate: isEnter ? { y: '0', transition: { duration: 1.5, delay: 0.5 } } : { y: '-150%' },
          exit: { y: '-150%', transition: { duration: 1.5, delay: 0.5 } }
        }}
      >
        {children}
      </DivWrapper>
    </div>
  );
}
