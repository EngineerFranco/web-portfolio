import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-3xl capitalize font-medium mb-6 text-center dark:text-white'>{children}</h2>
  );
}
