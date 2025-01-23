"use client";
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white font-noto-sans-jp overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#CB6CE6] opacity-30 blur-[200px] animate-float" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2EECC6] opacity-30 blur-[200px] animate-float-delay" />
      <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] rounded-full bg-[#973BF0] opacity-30 blur-[200px] animate-float" />

      <div className="relative z-10">
        <Header />
        <header className="container px-4 pt-24 pb-16 mx-auto text-center">
          <h1 className="mb-8 text-5xl font-bold md:text-7xl font-outfit">
            <span className="bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text drop-shadow-lg">
              TechNews
            </span>
            <br />
            <span className="block mt-4 text-4xl md:text-5xl font-noto-sans-jp">
              最新のテクノロジーニュース
            </span>
          </h1>
          <p className="mb-12 text-xl font-light text-gray-300 font-noto-sans-jp">
            AI、ビジネス、健康、エンタメの最新情報をお届け
          </p>
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <Link href="/technology" legacyBehavior>
              <a className="bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] px-8 py-4 rounded-lg text-lg font-noto-sans-jp font-bold hover:scale-105 transition-transform duration-300 shadow-lg inline-block">
                新着記事を読む
              </a>
            </Link>
            <Link href="/newsletter-signup" legacyBehavior>
              <a className="bg-gradient-to-r from-[#2E3192]/20 to-[#2EECC6]/20 backdrop-blur-md px-8 py-4 rounded-lg text-lg font-noto-sans-jp font-bold border border-[#2EECC6]/30 hover:scale-105 transition-transform duration-300 shadow-lg inline-block">
                ニュースレター登録
              </a>
            </Link>
          </div>
        </header>
        <NewsSection />
        <Footer />
      </div>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 15s ease-in-out infinite;
          animation-delay: -7.5s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;