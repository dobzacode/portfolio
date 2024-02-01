'use client';

import { AnimatePresence } from 'framer-motion';

export function FramerMotionWrapper({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
