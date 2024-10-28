import { useState, useEffect } from 'react';

interface DefaultApiResponse {
  [key: string]: unknown;
}

export const useFetch = <T = DefaultApiResponse>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('failed to fetching data');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, [url]);

  return { data, loading, error };
};
