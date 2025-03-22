'use client';

import { type ElementType, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps<T extends ElementType = 'section'> extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: T;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  withContainer?: boolean;
}

/**
 * セクションコンポーネント
 * 
 * @component
 * @description
 * ページの各セクションのベースとなるコンポーネント。
 * パディング、マージン、背景色などの共通スタイルを提供し、
 * オプションでコンテナラッパーを含めることができます。
 */
const Section = <T extends ElementType = 'section'>({
  children,
  as,
  className,
  containerProps,
  withContainer = true,
  ...props
}: SectionProps<T>) => {
  const Component = as || 'section';
  const content = withContainer ? (
    <Container {...containerProps}>
      {children}
    </Container>
  ) : children;

  return (
    <Component
      className={cn(
        'py-16',
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
};

export { Section };
export type { SectionProps };