"use client";
import React, { useState } from "react";

const NavLink = ({ href, children }) => (
  <a href={href} className="font-noto-sans-jp font-medium hover:text-[#2EECC6] transition-colors">
    {children}
  </a>
);

const MobileMenu = ({ isOpen, toggleMenu }) => (
  isOpen && (
    <nav className="py-4 border-t border-gray-800 md:hidden">
      <div className="flex flex-col gap-4">
        <NavLink href="#">テクノロジー</NavLink>
        <NavLink href="#">ビジネス</NavLink>
        <NavLink href="#">健康</NavLink>
        <NavLink href="#">エンタメ</NavLink>
        <NavLink href="#">スポーツ</NavLink>
        <NavLink href="#">ライフスタイル</NavLink>
      </div>
    </nav>
  )
);

const NewsCard = ({ image, category, title, description, date }) => (
  <div className="backdrop-blur-xl bg-black/30 rounded-xl overflow-hidden border border-gray-800 hover:border-[#CB6CE6] transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-[#CB6CE6]/20">
    <img src={image} alt={title} className="object-cover w-full h-48" />
    <div className="p-8">
      <span className={`bg-gradient-to-r ${category === 'テクノロジー' ? 'from-[#CB6CE6] to-[#2EECC6]' : category === 'ビジネス' ? 'from-[#FF3358] to-[#FFB800]' : 'from-[#2E3192] to-[#2EECC6]'} text-sm font-bold mb-3 px-4 py-1 rounded-full inline-block`}>
        {category}
      </span>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-300">{description}</p>
      <time className="text-sm text-gray-400">{date}</time>
    </div>
  </div>
);

function MainComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white font-noto-sans-jp overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#CB6CE6] opacity-30 blur-[200px] animate-float" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2EECC6] opacity-30 blur-[200px] animate-float-delay" />
      <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] rounded-full bg-[#973BF0] opacity-30 blur-[200px] animate-float" />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/50 backdrop-blur-lg">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <a href="#" className="text-2xl font-outfit font-bold bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text">
                  TechNews
                </a>
                <nav className="items-center hidden gap-6 md:flex">
                  <NavLink href="#">テクノロジー</NavLink>
                  <NavLink href="#">ビジネス</NavLink>
                  <NavLink href="#">健康</NavLink>
                  <NavLink href="#">エンタメ</NavLink>
                  <NavLink href="#">スポーツ</NavLink>
                  <NavLink href="#">ライフスタイル</NavLink>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 transition-colors rounded-full hover:bg-white/10">
                    <i className="text-lg fas fa-search"></i>
                  </button>
                  {isSearchOpen && (
                    <div className="absolute right-0 top-12 w-[300px] bg-black/50 backdrop-blur-xl p-4 rounded-xl border border-gray-800">
                      <input type="search" placeholder="検索..." className="w-full bg-white/10 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#2EECC6] transition-colors" />
                    </div>
                  )}
                </div>
                <button className="hidden md:block bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  ログイン
                </button>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 transition-colors rounded-full md:hidden hover:bg-white/10">
                  <i className={`fas fa-${isMobileMenuOpen ? "times" : "bars"} text-lg`}></i>
                </button>
              </div>
            </div>
          </div>
          <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </header>

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
            <button className="bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] px-8 py-4 rounded-lg text-lg font-noto-sans-jp font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
              新着記事を読む
            </button>
            <button className="bg-gradient-to-r from-[#2E3192]/20 to-[#2EECC6]/20 backdrop-blur-md px-8 py-4 rounded-lg text-lg font-noto-sans-jp font-bold border border-[#2EECC6]/30 hover:scale-105 transition-transform duration-300 shadow-lg">
              ニュースレター登録
            </button>
          </div>
        </header>

        <section className="container px-4 py-16 mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text">
            最新ニュース
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <NewsCard
              image="/images/news3.jpg"
              category="テクノロジー"
              title="新しいテクノロジーがビジネスを変える"
              description="最新のテクノロジーがどのようにビジネスの運営を変革しているかを探ります。"
              date="2025.01.13"
            />
            <NewsCard
              image="/images/news4.jpg"
              category="ビジネス"
              title="ビジネスの未来：AIの影響"
              description="AIがビジネスの未来に与える影響についての考察。"
              date="2025.01.12"
            />
          </div>
        </section>

        <section className="container px-4 py-16 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text">
            注目のニュース
          </h2>
          <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-2">
            <NewsCard
              image="/images/news1.jpg"
              category="健康"
              title="健康的なライフスタイルの重要性"
              description="健康的なライフスタイルがもたらす利点について。"
              date="2025.01.15"
            />
            <NewsCard
              image="/images/news2.jpg"
              category="エンタメ"
              title="最新の映画レビュー"
              description="今月の注目映画をレビューします。"
              date="2025.01.14"
            />
          </div>
        </section>

        <footer className="container px-4 py-16 mx-auto text-center">
          <div className="h-[1px] max-w-2xl mx-auto mb-8 bg-gradient-to-r from-transparent via-[#CB6CE6] to-transparent opacity-30"></div>
          <p className="text-gray-400">© 2025 TechNews. All rights reserved.</p>
        </footer>
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
}

export default MainComponent;