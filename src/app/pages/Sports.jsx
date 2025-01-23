import React from 'react';
import Link from 'next/link';

const Sports = () => {
  return (
    <div>
      <h1>スポーツ</h1>
      <p>スポーツに関する最新情報をお届けします。</p>
      <Link href="/sports/articles" className="text-blue-500 hover:underline">最新記事を読む</Link>
    </div>
  );
};

export default Sports;
