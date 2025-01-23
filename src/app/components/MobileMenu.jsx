import React from "react";
import NavLink from './NavLink';

/**
 * モバイル用メニューコンポーネント
 * 
 * @component
 * @param {Object} props - コンポーネントのプロパティ
 * @param {boolean} props.isOpen - メニューの開閉状態
 * @param {Function} props.onClose - メニューを閉じるコールバック関数
 * 
 * @description
 * モバイルデバイス向けのレスポンシブナビゲーションメニューを実装
 * - オーバーレイ効果とスムーズなトランジションアニメーション
 * - 全カテゴリへのナビゲーションリンクを垂直方向に表示
 * - クリックイベントの適切なバブリング制御
 */
const MobileMenu = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 z-50 bg-gray-900/80 dark:bg-black/80 backdrop-blur-lg transition-opacity duration-[var(--animation-duration)] ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    onClick={onClose}
  >
    <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-background-primary shadow-xl transform transition-transform duration-[var(--animation-duration)] ease-in-out">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={onClose}
          className="p-2 ml-auto text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
        >
          <i className="text-xl fas fa-times"></i>
        </button>
      </div>
      <nav className="p-6 space-y-4">
        <NavLink href="/technology" className="block px-4 py-3 transition-colors rounded-lg hover:bg-hover">
          テクノロジー
        </NavLink>
        <NavLink href="/business" className="block px-4 py-3 transition-colors rounded-lg hover:bg-hover">
          ビジネス
        </NavLink>
        <NavLink href="/health" className="block px-4 py-3 transition-colors rounded-lg hover:bg-hover">
          健康
        </NavLink>
        <NavLink href="/entertainment" className="block px-4 py-3 transition-colors rounded-lg hover:bg-hover">
          エンタメ
        </NavLink>
        <NavLink href="/sports" className="block px-4 py-3 transition-colors rounded-lg hover:bg-hover">
          スポーツ
        </NavLink>
        <NavLink href="/lifestyle" className="block px-4 py-3 transition-colors rounded-lg hover:bg-hover">
          ライフスタイル
        </NavLink>
      </nav>
    </div>
  </div>
);

export default MobileMenu;
