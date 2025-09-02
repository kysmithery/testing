import React, { useState, useEffect } from 'react';

function Error({ statusCode }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // This will only run on the client after the component has mounted
    // and helps prevent hydration mismatches caused by dynamic client-side values
    // like locale-specific dates/times or `Date.now()`, `Math.random()`.
    setCurrentTime(new Date().toLocaleString());
  }, []);

  return (
    <div>
      <h1>
        {statusCode
          ? `Error: ${statusCode}`
          : 'An unexpected error occurred'}
      </h1>
      <p>This is the error page.</p>
      {/* Render client-side dynamic content only after it's been set */}
      {currentTime && <p>Current time: {currentTime}</p>}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
