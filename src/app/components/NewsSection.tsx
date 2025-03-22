'use client';

import type { FC } from 'react';
import NewsCard from './NewsCard';
import Section from './Section';
import { layoutStyles } from '../utils/styles';
import { newsData, type NewsItem } from '../constants/news-data';

/**
 * ニュースグリッドの型定義
 */
type NewsGridProps = {
  title: string;
  items: readonly NewsItem[];
  className?: string;
};

/**
 * メインのニュースセクションコンポーネント
 * 
 * @component
 * @description
 * 最新ニュースと注目のニュースを表示するセクション。
 * それぞれのセクションはグリッドレイアウトでニュースカードを表示します。
 */
const NewsSection: FC = () => {
  /**
   * ニュースカードグリッドコンポーネント
   * 
   * @description
   * ニュースカードをグリッドレイアウトで表示するコンポーネント。
   * NewsSection内でのみ使用される内部コンポーネント。
   */
  const NewsGrid: FC<NewsGridProps> = ({ title, items, className = '' }) => (
    <Section title={title}>
      <div className={`${layoutStyles.grid} ${className}`}>
        {items.map((news) => (
          <NewsCard key={`${news.category}-${news.title}`} {...news} />
        ))}
      </div>
    </Section>
  );

  return (
    <>
      <NewsGrid 
        title="最新ニュース"
        items={newsData.latest}
      />
      <NewsGrid 
        title="注目のニュース"
        items={newsData.featured}
        className="max-w-6xl mx-auto"
      />
    </>
  );
};

export default NewsSection;