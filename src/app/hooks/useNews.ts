import { useState, useEffect } from 'react';
import { NewsItem, NewsFilters } from '@/types/news';

export const useNews = (filters?: NewsFilters) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        // TODO: Replace with actual API call
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        
        // Apply filters
        let filteredData = [...data];
        if (filters) {
          if (filters.category) {
            filteredData = filteredData.filter(item => item.category === filters.category);
          }
          if (filters.tag) {
            filteredData = filteredData.filter(item => item.tags.includes(filters.tag!));
          }
          if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            filteredData = filteredData.filter(item => 
              item.title.toLowerCase().includes(searchLower) ||
              item.description.toLowerCase().includes(searchLower)
            );
          }
          if (filters.sortBy) {
            filteredData.sort((a, b) => {
              const aValue = filters.sortBy === 'date' ? new Date(a.publishedAt).getTime() : a.title;
              const bValue = filters.sortBy === 'date' ? new Date(b.publishedAt).getTime() : b.title;
              return filters.sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
            });
          }
        }
        
        setNews(filteredData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [filters]);

  return { news, isLoading, error };
}; 