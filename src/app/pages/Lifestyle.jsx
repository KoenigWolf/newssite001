import React from 'react';
import Link from 'next/link';

const Lifestyle = () => {
  return (
    <div>
      <h1>ライフスタイル</h1>
      <p>ライフスタイルに関する最新情報をお届けします。</p>
      <Link href="/lifestyle/articles" className="text-blue-500 hover:underline">最新記事を読む</Link>
    </div>
  );
};

export default Lifestyle;
