import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-900">
        <div className="container px-4 py-12 mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-white">管理ダッシュボード</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* 管理機能のカードをここに追加 */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;