import React from 'react';
import NewsSection from '../components/NewsSection';

const Technology = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-4xl font-bold">テクノロジーニュース</h1>
      <NewsSection 
        category="technology"
        pageSize={12}
        showCategoryFilter={false}
      />
    </div>
  );
};

export default Technology;
