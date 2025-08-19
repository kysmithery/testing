'use client';

import * as Sentry from "@sentry/nextjs";

export default function Home() {
  const triggerClientError = () => {
    try {
      throw new Error("This is a client-side test error!");
    } catch (error) {
      Sentry.captureException(error);
      console.error("Sentry captured an error:", error);
    }
  };

  return (
    <div>
      <h1>Sentry Next.js Example</h1>
      <p>Click the button below to trigger a client-side error.</p>
      <button onClick={triggerClientError}>Trigger Client Error</button>
    </div>
  );
}
