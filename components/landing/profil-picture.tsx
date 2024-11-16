import { cn } from '@/lib/utils';
import portraitImg from '@/public/portrait.png';
import Image from 'next/image';
import DivWrapper from '../framer/div-wrapper';

export default function ProfilPicture({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-[20rem] w-full shrink-0 justify-center overflow-hidden mobile-large:h-[20rem] tablet:h-[30rem] laptop:h-[35rem]',
        className
      )}
    >
      <DivWrapper
        key="portrait"
        variant={{
          initial: { y: '70vh' },
          animate: {
            y: '0rem',
            transition: {
              delay: 0,
              ease: 'easeInOut',
              duration: 1
            }
          },
          exit: {
            y: '70vh',
            transition: {
              type: 'tween',
              duration: 1
            }
          }
        }}
      >
        <Image
          priority={true}
          className="mx-auto w-[30rem] pl-medium mobile-large:w-1/2 tablet:w-2/3 laptop:w-[40rem]"
          width={400}
          height={400}
          sizes="(max-width: 500px) 100vw, (max-width: 1200px) 500px, 1000px"
          src={portraitImg}
          placeholder="blur"
          alt="picture"
        />
      </DivWrapper>
      <DivWrapper
        key="hr-pic"
        tag="hr"
        variant={{
          initial: { maxWidth: 0, opacity: 0 },
          animate: {
            opacity: 1,
            maxWidth: '100%',
            transition: {
              maxWidth: { type: 'easeOut', delay: 0 },
              opacity: { duration: 0.01, delay: 0 }
            }
          },
          exit: {
            maxWidth: 0,
            transition: { type: 'easeOut', duration: 1 }
          }
        }}
        className="glowy-shadow absolute bottom-0 z-40 box-content w-full border-2 border-tertiary40 "
      />
    </div>
  );
}
