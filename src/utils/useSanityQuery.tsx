"use client";

import { useState, useEffect } from "react";
import { client } from "@/lib/sanityClient";

export function useSanityQuery<T>(query: string, params: Record<string, any> = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    client
      .fetch(query, params)
      .then((res: T) => {
        if (isMounted) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [query, params]);

  return { data, loading, error };
}
