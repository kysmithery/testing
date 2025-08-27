import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js with Sentry!</h1>
      <p>
        {mounted ? 'You are on the client side.' : 'Loading client-side content...'}
      </p>
    </div>
  );
}
