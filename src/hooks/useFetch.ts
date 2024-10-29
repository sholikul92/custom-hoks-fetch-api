import { useState, useEffect } from 'react';

interface DefaultApiResponse {
  [key: string]: unknown;
}

export const useFetch = <T = DefaultApiResponse>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { pathname } = new URL(url);
  const path = pathname.replace('/', '-');

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const cacheKey = `cache${path}`;
        const cacheData = localStorage.getItem(cacheKey);

        if (cacheData) {
          setData(JSON.parse(cacheData));
        } else {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error('failed to fetching data');
          }

          const result = await response.json();
          setData(result);

          localStorage.setItem(cacheKey, JSON.stringify(result));
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, [url, path]);

  return { data, loading, error };
};
