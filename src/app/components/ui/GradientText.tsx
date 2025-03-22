'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  gradient?: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
}

const gradientMap = {
  primary: 'from-[#CB6CE6] to-[#2EECC6]',
  secondary: 'from-[#3B82F6] to-[#10B981]',
  tertiary: 'from-[#EC4899] to-[#8B5CF6]',
};

const GradientText = ({ 
  gradient = 'primary',
  className,
  children,
  ...props
}: GradientTextProps) => {
  return (
    <span 
      className={cn(
        'bg-gradient-to-r text-transparent bg-clip-text',
        gradientMap[gradient],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export { GradientText, gradientMap };