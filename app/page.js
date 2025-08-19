'use client';

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked!");
    // Simulate an error for Sentry
    try {
      throw new Error("Client-side button click error!");
    } catch (error) {
      // In a real application, you might want to capture this error with Sentry
      // Sentry.captureException(error);
      console.error("Caught error:", error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to Next.js with Sentry!</h1>
      <p>This is an example application demonstrating Sentry integration.</p>
      <button onClick={handleClick}>
        Trigger Client-Side Error
      </button>
      <p>Click the button above to test client-side error capture.</p>
      {/* Other content for your page */}
    </div>
  );
}
