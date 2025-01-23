import React from 'react';
import Link from 'next/link';

const Health = () => {
  return (
    <div>
      <h1>健康</h1>
      <p>健康に関する最新情報をお届けします。</p>
      <Link href="/health/articles" className="text-blue-500 hover:underline">最新記事を読む</Link>
    </div>
  );
};

export default Health;
