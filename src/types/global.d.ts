declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface Window {
  ENV: {
    API_BASE_URL: string;
    GA_TRACKING_ID: string;
  };
}

type Category = 
  | 'technology'
  | 'business'
  | 'health'
  | 'entertainment'
  | 'sports'
  | 'lifestyle';

interface Article {
  id: string;
  title: string;
  content: string;
  category: Category;
  publishedAt: string;
  author: string;
  thumbnailUrl: string;
  relatedArticles?: Article[];
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  lastLogin?: string;
}

interface ApiResponse<T> {
  data?: T;
  error?: {
    code: number;
    message: string;
  };
  meta?: {
    total: number;
    page: number;
    perPage: number;
  };
}
