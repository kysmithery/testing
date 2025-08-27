import React, { useState, useEffect } from 'react';

function Home() {
  // State to track if the component has mounted on the client side
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once the component mounts on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a Next.js application integrated with Sentry.</p>
      {/* 
        Conditional rendering to prevent hydration mismatch for dynamic content.
        Content that varies between server and client (e.g., Date.now(), Math.random(),
        or window object access) should only be rendered client-side.
      */}
      {isClient ? (
        <p>Current client-side timestamp: {Date.now()}</p>
      ) : (
        <p>Loading client-side data...</p>
      )}
    </div>
  );
}

export default Home;
