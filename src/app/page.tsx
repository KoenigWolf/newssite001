import type { FC } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import BackgroundGradients from './components/BackgroundGradients';

/**
 * メインページコンポーネント
 * 
 * @component
 * @description
 * サイトのメインページ。
 * ヒーローセクション、ニュースセクション、背景エフェクトを含みます。
 */
const Home: FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundGradients />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <NewsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;