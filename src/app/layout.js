"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import LoadingIndicator from './components/LoadingIndicator';
import { AuthProvider } from './hooks/useAuth';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

const Layout = ({ children }) => {
  return (
      <html lang="ja" className={`${inter.variable}`}>
        <body className="min-h-screen antialiased bg-gray-900">
          <AuthProvider>
            <LoadingIndicator />
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              {children}
            </div>
          </AuthProvider>
        </body>
      </html>
  );
};

export default Layout;
