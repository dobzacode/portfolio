import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const images = ['/project/mtonarchi.jpg', '/project/abject-act.jpg', '/project/roddat.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  });

  console.log(images[activeIndex]);

  return (
    <div className="slideInFromRight flex aspect-square w-full  justify-center  pt-6 opacity-0 animation-delay-[3.5s] laptop:w-3/5 laptop:max-w-[650px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="relative aspect-square w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
        >
          <Image
            src={images[activeIndex]}
            priority={true}
            sizes={'(max-width: 500px) 100vw, 800px'}
            fill
            className="relative -z-20 grayscale"
            alt=""
          ></Image>
          <div className="absolute top-0 -z-10 h-full w-full bg-primary40 opacity-5 hover:opacity-0"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
