import React from 'react';
import Link from 'next/link';

const Business = () => {
  return (
    <div>
      <h1>ビジネス</h1>
      <p>ビジネスに関する最新情報をお届けします。</p>
      <Link href="/business/articles" className="text-blue-500 hover:underline">最新記事を読む</Link>
    </div>
  );
};

export default Business;
