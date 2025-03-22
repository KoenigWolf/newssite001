import type { ReactNode } from 'react';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

// フォントの設定
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '700']
});

/**
 * ルートレイアウトコンポーネント
 * 
 * @description
 * アプリケーション全体のレイアウトを定義します。
 * - フォントの設定
 * - 基本的なページ構造
 * - メタデータ
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <title>TechNews - 最新のテクノロジーニュース</title>
        <meta name="description" content="AI、ビジネス、健康、エンタメの最新情報をお届けするニュースサイト" />
      </head>
      <body className="min-h-screen antialiased bg-[#0D0D0D]">
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}