"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LoadingIndicator = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] animate-pulse"></div>
  ) : null;
};

export default LoadingIndicator;
