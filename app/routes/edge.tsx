// app/routes/_edge.tsx
import type { MetaFunction } from "@vercel/remix";

export const config = { runtime: "nodejs" };

export const meta: MetaFunction = () => [
  { title: "Remix@Edge · Forgeon playground" },
  {
    name: "description",
    content:
      "Edge runtime variant of the Remix playground, useful for testing latency and routing.",
  },
];

export default function Edge() {
  return (
    <main className="forgeon-card">
      <div className="forgeon-back">
        <a href="/">← Back to home</a>
      </div>

      <div className="forgeon-grid">
        <div>
          <div className="forgeon-eyebrow">Remix@Edge</div>
          <h1 className="forgeon-title">
            Edge-flavored Remix for Forgeon tests.
          </h1>
          <p className="forgeon-text">
            This route runs using the <strong>Edge runtime</strong>, so you can
            experiment with low-latency responses and different deployment
            targets inside Forgeon.
          </p>
        </div>

        <div>
          <div className="forgeon-links">
            <a href="/">
              /
              <span>– main playground landing</span>
            </a>
            <a href="/info">
              /info
              <span>– service overview</span>
            </a>
            <a
              href="https://forgeon.io"
              target="_blank"
              rel="noreferrer"
            >
              forgeon.io
              <span>– learn more about the platform</span>
            </a>
          </div>
        </div>
      </div>

      <div className="forgeon-meta">
        <span>Use this route to test Edge behavior from Forgeon.</span>
        <span className="forgeon-badge">runtime: edge</span>
      </div>
    </main>
  );
}
