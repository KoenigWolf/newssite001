'use client';

import { motion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

const animationPresets = {
  scale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.3 }
  },
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 }
  }
} as const;

type AnimationType = keyof typeof animationPresets;

export interface AnimatedElementProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'whileHover' | 'whileTap'> {
  children: ReactNode;
  animation?: AnimationType;
  as?: ElementType;
}

/**
 * アニメーション付きの要素コンポーネント
 * 
 * @component
 * @description
 * Framer Motionを使用したアニメーション付きの要素を提供します。
 * プリセットのアニメーションタイプを指定できます。
 */
const AnimatedElement = ({
  children,
  animation = 'fadeIn',
  as = 'div',
  className,
  ...props
}: AnimatedElementProps) => {
  const MotionComponent = motion[as as keyof typeof motion] || motion.div;
  const preset = animationPresets[animation];

  return (
    <MotionComponent
      initial={preset.initial}
      animate={preset.animate}
      whileHover={preset.whileHover}
      whileTap={preset.whileTap}
      transition={preset.transition}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export { AnimatedElement, animationPresets };
export type { AnimatedElementProps, AnimationType };