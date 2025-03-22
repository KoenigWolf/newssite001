'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/app/utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * コンテナコンポーネント
 * 
 * @component
 * @description
 * コンテンツの最大幅を制御し、水平方向のパディングを提供する
 * レイアウトコンテナコンポーネント。
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', padding = 'md', children, ...props }, ref) => {
    const baseStyles = 'mx-auto w-full';
    
    const sizes = {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      full: 'max-w-full',
    };

    const paddings = {
      none: '',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          sizes[size],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container };