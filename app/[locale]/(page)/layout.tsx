import FramerMotionWrapper from '@/components/wrapper/framer-motion-wrapper';
import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return <FramerMotionWrapper>{children}</FramerMotionWrapper>;
}
