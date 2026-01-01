'use client';

import { useState, useEffect } from 'react';

export default function EnvPage() {
  const [envVars, setEnvVars] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/env')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch environment variables');
        }
        return res.json();
      })
      .then((data) => {
        setEnvVars(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Runtime Environment Variables</h1>
      </div>
      <div>
        <pre>{JSON.stringify(envVars, null, 2)}</pre>
      </div>
    </main>
  );
}
