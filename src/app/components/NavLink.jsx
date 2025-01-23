import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  // トレイリングスラッシュとクエリパラメータを正規化して比較
  const normalizedPath = pathname.replace(/\/$/, '').split('?')[0];
  const normalizedHref = href.replace(/\/$/, '').split('?')[0];
  const isActive = normalizedPath === normalizedHref;

  return (
    <Link
      href={href}
      className={`font-noto-sans-jp font-medium transition-colors ${isActive ? 'text-[#2EECC6]' : 'hover:text-[#2EECC6]'}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
