'use client';

import { usePathname } from '@/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%', transition: { duration: 2.5, ease: 'easeInOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className=" h-1 w-0 bg-tertiary40"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
