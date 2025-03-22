/**
 * レイアウトスタイルの定義
 * 
 * @description
 * アプリケーション全体で使用される共通のレイアウトスタイルを定義します。
 * TailwindCSSのユーティリティクラスを組み合わせて、一貫したレイアウトを提供します。
 */

interface LayoutStyles {
  /** グリッドレイアウトの基本スタイル */
  grid: string;
  /** コンテナーの基本スタイル */
  container: string;
  /** セクション間のスペーシング */
  section: string;
}

export const layoutStyles: LayoutStyles = {
  grid: [
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-2',
    'gap-6',
    'md:gap-8'
  ].join(' '),

  container: [
    'container',
    'mx-auto',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    'max-w-7xl'
  ].join(' '),

  section: [
    'py-12',
    'md:py-16',
    'lg:py-20'
  ].join(' ')
} as const;