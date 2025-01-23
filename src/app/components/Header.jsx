import React, { useState } from "react";
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * サイトヘッダーコンポーネント
 * 
 * @component
 * @example
 * return <Header />
 * 
 * @description
 * ナビゲーションリンク、検索機能、認証状態に応じたログイン/ログアウトボタンを表示
 * - レスポンシブ対応のモバイルメニューを実装
 * - ルーティング状態を監視してアクティブなリンクをハイライト
 * - 検索モーダルの表示制御機能を内包
 */
const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50 backdrop-blur-lg">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-outfit font-bold bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text">
              TechNews
            </Link>
            <nav className="items-center hidden gap-6 md:flex">
              <NavLink href="/technology">テクノロジー</NavLink>
              <NavLink href="/business">ビジネス</NavLink>
              <NavLink href="/health">健康</NavLink>
              <NavLink href="/entertainment">エンタメ</NavLink>
              <NavLink href="/sports">スポーツ</NavLink>
              <NavLink href="/lifestyle">ライフスタイル</NavLink>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <i className="text-lg fas fa-search"></i>
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-[300px] bg-black/50 backdrop-blur-xl p-4 rounded-xl border border-gray-800">
                  <input 
                    type="search" 
                    placeholder="検索..." 
                    className="w-full bg-white/10 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#2EECC6] transition-colors" 
                  />
                </div>
              )}
            </div>

            {user ? (
              <button 
                onClick={handleLogout}
                className="hidden px-4 py-2 font-medium text-white transition-opacity rounded-lg md:block bg-error hover:opacity-90"
              >
                ログアウト
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden px-4 py-2 font-medium text-white transition-opacity rounded-lg md:block bg-primary hover:opacity-90"
              >
                ログイン
              </Link>
            )}

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 transition-colors rounded-full md:hidden hover:bg-white/10"
            >
              <i className={`fas fa-${isMobileMenuOpen ? "times" : "bars"} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
