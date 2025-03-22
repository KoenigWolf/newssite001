import { BACKGROUND_GRADIENTS } from '../constants/homepage';

/**
 * 背景グラデーションコンポーネント
 * 
 * @component
 * @description ホームページの背景に表示される装飾的なグラデーション要素
 */
export default function BackgroundGradients() {
  return (
    <>
      {BACKGROUND_GRADIENTS.map((gradient) => (
        <div
          key={gradient.id}
          className={`
            absolute ${gradient.position} ${gradient.size} 
            rounded-full ${gradient.color} opacity-30 blur-[200px]
            ${gradient.animationDelay ? 'animate-float-delay' : 'animate-float'}
          `}
        />
      ))}
    </>
  );
}