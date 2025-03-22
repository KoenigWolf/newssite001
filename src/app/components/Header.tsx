'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '../constants/homepage';
import { Button } from './ui/Button';

/**
 * ヘッダーコンポーネント
 * 
 * @component
 * @description
 * サイトのヘッダーセクション。
 * ナビゲーションリンクとロゴを含みます。
 */
const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-black/50 backdrop-blur-lg border-white/10">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-[#2EECC6] transition-colors"
          >
            TechNews
          </Link>

          <div className="items-center hidden gap-6 md:flex">
            <Button
              href={NAVIGATION_LINKS.READ_ARTICLES.href}
              variant="ghost"
              size="sm"
            >
              最新記事
            </Button>
            <Button
              href={NAVIGATION_LINKS.NEWSLETTER.href}
              variant="nav"
              size="sm"
            >
              ニュースレター
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;