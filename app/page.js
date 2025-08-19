'use client';

export default function Home() {
  const handleClick = () => {
    // In a real application, this might trigger a Sentry error or other client-side logic.
    console.log('Button clicked! This action is now allowed.');
  };

  return (
    <div>
      <h1>Welcome to the Sentry Next.js Example!</h1>
      <p>This is a basic page to demonstrate Sentry integration.</p>
      <button onClick={handleClick}>
        Click me for client-side interaction
      </button>
      <p>This page is now a Client Component to support interactivity.</p>
    </div>
  );
}
