'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener('mousemove', (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute('style', 'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;');
    });
    document.addEventListener('click', () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add('expand');
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove('expand');
      }, 500);
    });
  }, []);
  return (
    <div
      className="cursor absolute flex h-20 w-20 cursor-none items-center justify-center rounded-full duration-100  after:absolute  after:-left-4 after:-top-4 after:h-10 after:w-10 after:rounded-full after:border-2 after:border-tertiary40 after:opacity-50 max-laptop:hidden"
      ref={cursorRef}
    >
      <div className="after:absolute after:-left-3 after:-top-3 after:h-8 after:w-8 after:rounded-full  after:bg-tertiary40 after:bg-opacity-40  after:opacity-50 "></div>
      <div className="absolute left-[1px] top-[1px] z-[60] rounded-full bg-tertiary40 p-1 opacity-100    "></div>
    </div>
  );
}
