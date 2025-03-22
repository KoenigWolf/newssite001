export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  author: string;
  tags: string[];
}

export interface NewsSection {
  title: string;
  description: string;
  items: NewsItem[];
}

export interface NewsFilters {
  category?: string;
  tag?: string;
  search?: string;
  sortBy?: 'date' | 'title';
  sortOrder?: 'asc' | 'desc';
} 