import React from 'react';
import Link from 'next/link';

const Entertainment = () => {
  return (
    <div>
      <h1>エンタメ</h1>
      <p>エンタメに関する最新情報をお届けします。</p>
      <Link href="/entertainment/articles" className="text-blue-500 hover:underline">最新記事を読む</Link>
    </div>
  );
};

export default Entertainment;
