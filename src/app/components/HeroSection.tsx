'use client';

import type { FC } from 'react';
import { HERO_SECTION, NAVIGATION_LINKS } from '../constants/homepage';
import { GradientText } from './ui/GradientText';
import { Button } from './ui/Button';

/**
 * ホームページのヒーローセクションコンポーネント
 * 
 * @component
 * @description メインビジュアル、タイトル、説明文、CTAボタンを含むヒーローセクション
 */
const HeroSection: FC = () => {
  return (
    <header className="container px-4 pt-24 pb-16 mx-auto text-center">
      <h1 className="mb-8 text-5xl font-bold md:text-7xl font-outfit">
        <GradientText>
          {HERO_SECTION.TITLE}
        </GradientText>
        <br />
        <span className="block mt-4 text-4xl md:text-5xl font-noto-sans-jp">
          {HERO_SECTION.SUBTITLE}
        </span>
      </h1>
      <p className="mb-12 text-xl font-light text-gray-300 font-noto-sans-jp">
        {HERO_SECTION.DESCRIPTION}
      </p>
      
      {/* CTAボタンセクション */}
      <div className="flex flex-col justify-center gap-6 md:flex-row">
        <Button
          href={NAVIGATION_LINKS.READ_ARTICLES.href}
          variant="primary"
        >
          {NAVIGATION_LINKS.READ_ARTICLES.text}
        </Button>
        <Button
          href={NAVIGATION_LINKS.NEWSLETTER.href}
          variant="secondary"
        >
          {NAVIGATION_LINKS.NEWSLETTER.text}
        </Button>
      </div>
    </header>
  );
};

export default HeroSection;