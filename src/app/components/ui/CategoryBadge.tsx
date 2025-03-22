'use client';

import type { FC } from 'react';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

const categoryStyles: Record<string, string> = {
  'テクノロジー': 'from-[#CB6CE6] to-[#2EECC6]',
  'ビジネス': 'from-[#3B82F6] to-[#10B981]',
  '健康': 'from-[#EC4899] to-[#8B5CF6]',
  'エンタメ': 'from-[#F59E0B] to-[#EF4444]',
};

const CategoryBadge: FC<CategoryBadgeProps> = ({ category, className }) => {
  const gradientStyle = categoryStyles[category] || 'from-gray-500 to-gray-600';

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r',
        gradientStyle,
        className
      )}
    >
      {category}
    </span>
  );
};

export { CategoryBadge, categoryStyles };
export type { CategoryBadgeProps };