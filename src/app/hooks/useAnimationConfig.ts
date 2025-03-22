import { type Target, type TargetAndTransition, type Transition } from 'framer-motion';

export interface AnimationConfig {
  hover?: TargetAndTransition;
  tap?: TargetAndTransition;
  initial?: Target | Target[];
  animate?: TargetAndTransition;
  transition?: Transition;
}

/**
 * アニメーション設定のプリセット
 */
export const animations = {
  scale: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
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

type AnimationType = keyof typeof animations;

/**
 * アニメーション設定を管理するカスタムフック
 * 
 * @param preset - プリセット名またはカスタム設定
 * @returns アニメーションの設定オブジェクト
 */
export const useAnimationConfig = (
  preset: AnimationType | AnimationConfig
) => {
  if (typeof preset === 'string') {
    return animations[preset];
  }

  return preset;
};