'use client';

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NewsItem } from '../constants/news-data';
import { CategoryBadge } from './ui/CategoryBadge';

/**
 * ニュースカードコンポーネント
 * 
 * @component
 * @description
 * ニュース記事のプレビューを表示するカードコンポーネント。
 * 画像、カテゴリー、タイトル、説明、日付を表示し、記事詳細へのリンクを提供します。
 */
const NewsCard: FC<NewsItem> = ({ image, category, title, description, date }) => {
  return (
    <Link href={`/articles/${encodeURIComponent(title)}`}>
      <article className="group relative bg-white/5 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-4">
          <CategoryBadge category={category} />
          
          <h3 className="mt-3 text-xl font-bold text-white group-hover:text-[#2EECC6] transition-colors">
            {title}
          </h3>
          
          <p className="mt-2 text-sm text-gray-300 line-clamp-2">
            {description}
          </p>
          
          <time className="block mt-4 text-sm text-gray-400">
            {date}
          </time>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;