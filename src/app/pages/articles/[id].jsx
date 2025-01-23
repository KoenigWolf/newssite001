import React from 'react';
import { useRouter } from 'next/router';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // 仮の記事データ（実際はAPIから取得）
  const article = {
    id: 1,
    title: decodeURIComponent(id),
    content: `ここに記事「${decodeURIComponent(id)}」の詳細内容が表示されます。最新のニュースや詳細な分析、関連情報などを掲載予定です。`,
    date: "2025.01.24",
    category: "テクノロジー",
    image: "/images/news-detail.jpg"
  };

  return (
    <div className="container max-w-3xl px-4 py-16 mx-auto">
      <article className="space-y-8">
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <div className="flex items-center gap-4 text-gray-400">
          <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-white">
            {article.category}
          </span>
          <time>{article.date}</time>
        </div>
        <img src={article.image} alt={article.title} className="rounded-xl" />
        <p className="text-lg leading-relaxed text-gray-300">
          {article.content}
        </p>
      </article>
    </div>
  );
};

export default ArticlePage;
