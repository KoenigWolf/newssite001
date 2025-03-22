/**
 * ニュース記事データの型定義
 */
export interface NewsItem {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

/**
 * サンプルニュースデータ
 */
export const newsData = {
  latest: [
    {
      title: 'AIが医療診断の精度を大幅に向上',
      description: '最新のAI技術により、がんの早期発見率が30%向上。医療現場に革新をもたらす可能性が示唆されました。',
      category: 'テクノロジー',
      date: '2024年3月15日',
      image: 'https://source.unsplash.com/800x600/?medical-technology'
    },
    {
      title: '次世代電気自動車の発表会が開催',
      description: '航続距離1000kmを実現した革新的なバッテリー技術を搭載。自動車産業に新たな可能性が開かれます。',
      category: 'ビジネス',
      date: '2024年3月14日',
      image: 'https://source.unsplash.com/800x600/?electric-vehicle'
    }
  ],
  featured: [
    {
      title: '新たな再生可能エネルギー技術が始動',
      description: '海洋温度差発電の実用化に成功。環境に優しい新エネルギー源として期待が高まっています。',
      category: 'テクノロジー',
      date: '2024年3月13日',
      image: 'https://source.unsplash.com/800x600/?renewable-energy'
    },
    {
      title: 'デジタルヘルスケアの最前線',
      description: 'ウェアラブルデバイスと健康管理AIの連携により、個別化医療が進化。予防医療の新時代が始まります。',
      category: '健康',
      date: '2024年3月12日',
      image: 'https://source.unsplash.com/800x600/?healthcare-technology'
    }
  ]
} as const;