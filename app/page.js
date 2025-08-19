'use client';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <h1>Welcome to Next.js with Sentry!</h1>
      <p>This is an example application to demonstrate Sentry integration.</p>
      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Click me for interactivity
      </button>
      <p style={{ marginTop: '20px', color: '#888' }}>
        Check your console for Sentry logs and errors.
      </p>
    </main>
  );
}
