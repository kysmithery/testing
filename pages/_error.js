import React, { useState, useEffect } from 'react';

function Error({ statusCode }) {
  const [clientTimestamp, setClientTimestamp] = useState(null);

  useEffect(() => {
    // This code only runs on the client after hydration, ensuring Date.now() is consistent.
    setClientTimestamp(Date.now());
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>
        {statusCode
          ? `Error ${statusCode}`
          : 'An error occurred on client'}
      </h1>
      <p>Sorry, something went wrong.</p>
      {clientTimestamp && (
        <p>
          This error was observed at:{' '}
          {new Date(clientTimestamp).toLocaleString()}
        </p>
      )}
      {!clientTimestamp && (
        <p>Loading error details...</p>
      )}
      <p>Please try refreshing the page or contact support if the issue persists.</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
