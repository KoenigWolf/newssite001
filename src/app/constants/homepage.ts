/**
 * ホームページで使用する定数を管理するファイル
 */

// ヒーローセクションのテキスト
export const HERO_SECTION = {
  TITLE: 'TechNews',
  SUBTITLE: '最新のテクノロジーニュース',
  DESCRIPTION: 'AI、ビジネス、健康、エンタメの最新情報をお届け'
} as const;

// ナビゲーションリンク
export const NAVIGATION_LINKS = {
  READ_ARTICLES: {
    href: '/technology',
    text: '新着記事を読む'
  },
  NEWSLETTER: {
    href: '/newsletter-signup',
    text: 'ニュースレター登録'
  }
} as const;

// 背景グラデーション設定
export const BACKGROUND_GRADIENTS = [
  {
    id: 'gradient-1',
    position: 'top-[-20%] left-[-10%]',
    size: 'w-[700px] h-[700px]',
    color: 'bg-[#CB6CE6]',
    animationDelay: false
  },
  {
    id: 'gradient-2',
    position: 'top-[30%] right-[-10%]',
    size: 'w-[600px] h-[600px]',
    color: 'bg-[#2EECC6]',
    animationDelay: true
  },
  {
    id: 'gradient-3',
    position: 'bottom-[-20%] left-[20%]',
    size: 'w-[800px] h-[800px]',
    color: 'bg-[#973BF0]',
    animationDelay: false
  }
] as const;