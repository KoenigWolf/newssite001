'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/app/utils/cn';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'lead';
  as?: keyof JSX.IntrinsicElements;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: 'default' | 'muted' | 'primary' | 'secondary';
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', as, weight = 'normal', align = 'left', color = 'default', children, ...props }, ref) => {
    const baseStyles = 'font-sans';
    
    const variants = {
      h1: 'text-4xl md:text-5xl font-bold',
      h2: 'text-3xl md:text-4xl font-bold',
      h3: 'text-2xl md:text-3xl font-bold',
      h4: 'text-xl md:text-2xl font-bold',
      h5: 'text-lg md:text-xl font-bold',
      h6: 'text-base md:text-lg font-bold',
      body: 'text-base',
      small: 'text-sm',
      lead: 'text-lg md:text-xl',
    };

    const weights = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    };

    const aligns = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    const colors = {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
    };

    const Component = as || (variant.startsWith('h') ? variant : 'p');

    return (
      <Component
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          weights[weight],
          aligns[align],
          colors[color],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export { Typography }; 