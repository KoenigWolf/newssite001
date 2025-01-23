import React from 'react';
import NewsCard from './NewsCard';

const NewsSection = () => (
  <>
    <section className="container px-4 py-16 mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text">
        最新ニュース
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        <NewsCard
          image="/images/news3.jpg"
          category="テクノロジー"
          title="新しいテクノロジーがビジネスを変える"
          description="最新のテクノロジーがどのようにビジネスの運営を変革しているかを探ります。"
          date="2025.01.13"
        />
        <NewsCard
          image="/images/news4.jpg"
          category="ビジネス"
          title="ビジネスの未来：AIの影響"
          description="AIがビジネスの未来に与える影響についての考察。"
          date="2025.01.12"
        />
      </div>
    </section>

    <section className="container px-4 py-16 mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text">
        注目のニュース
      </h2>
      <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-2">
        <NewsCard
          image="/images/news1.jpg"
          category="健康"
          title="健康的なライフスタイルの重要性"
          description="健康的なライフスタイルがもたらす利点について。"
          date="2025.01.15"
        />
        <NewsCard
          image="/images/news2.jpg"
          category="エンタメ"
          title="最新の映画レビュー"
          description="今月の注目映画をレビューします。"
          date="2025.01.14"
        />
      </div>
    </section>
  </>
);

export default NewsSection; 