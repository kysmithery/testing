'use client';

export default function Home() {
  const triggerError = () => {
    throw new Error('This is a test error from the client!');
  };

  return (
    <main>
      <h1>Sentry Next.js Example</h1>
      <p>Click the button below to trigger an error.</p>
      <button onClick={triggerError}>Trigger Client Error</button>
    </main>
  );
}
