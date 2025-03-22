import type { FC, ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * セクションコンポーネント
 * 
 * @component
 * @description
 * コンテンツをセクション単位で区切るためのコンポーネント。
 * タイトルとコンテンツエリアを持ち、一貫したスペーシングとスタイリングを提供します。
 * 
 * @example
 * ```tsx
 * <Section title="最新ニュース">
 *   <div>コンテンツ</div>
 * </Section>
 * ```
 */
const Section: FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl font-noto-sans-jp">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;