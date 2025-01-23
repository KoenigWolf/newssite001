import React from "react";
import Link from 'next/link';

const NewsCard = ({ image, category, title, description, date }) => (
  <Link href={`/articles/${encodeURIComponent(title)}`} className="block backdrop-blur-xl bg-black/30 rounded-xl overflow-hidden border border-gray-800 hover:border-[#CB6CE6] transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-[#CB6CE6]/20">
    <img src={image} alt={title} className="object-cover w-full h-48" />
    <div className="p-8" onClick={(e) => e.stopPropagation()}>
      <span className={`bg-gradient-to-r ${category === 'テクノロジー' ? 'from-[#CB6CE6] to-[#2EECC6]' : category === 'ビジネス' ? 'from-[#FF3358] to-[#FFB800]' : 'from-[#2E3192] to-[#2EECC6]'} text-sm font-bold mb-3 px-4 py-1 rounded-full inline-block`}>
        {category}
      </span>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <time className="text-sm text-gray-400">{date}</time>
    </div>
  </Link>
);

export default NewsCard;
