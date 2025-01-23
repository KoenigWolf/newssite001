/**
 * アプリケーション設定
 * 
 * @description
 * - 環境変数や機能フラグを一元管理
 * - 開発/本番環境での切り替えを容易に実現
 * - 型安全な設定アクセスを提供
 */
export const config = {
  // API設定
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.tech-news.com/v1',
    timeout: 30000,
    retries: 3,
  },

  // 機能フラグ
  features: {
    darkMode: true,
    analytics: process.env.NODE_ENV === 'production',
    experimentalComments: false,
  },

  // 検証用デフォルト値
  defaults: {
    pageSize: 20,
    maxRelatedArticles: 5,
  },

  // エラーハンドリング
  errorHandling: {
    maxErrorNotifications: 3,
    retryDelay: 5000,
  },

  // パフォーマンス設定
  performance: {
    imageLazyLoading: true,
    prefetchThreshold: 0.5,
  }
};

export type AppConfig = typeof config;
