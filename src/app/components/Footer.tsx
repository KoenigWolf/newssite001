'use client';

import type { FC } from 'react';

/**
 * フッターコンポーネント
 * 
 * @component
 * @description
 * サイトのフッターセクション。コピーライトと基本的な情報を表示します。
 */
const Footer: FC = () => {
  return (
    <footer className="py-8 mt-16 border-t border-white/10">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} TechNews. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;