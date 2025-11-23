// app/routes/about.tsx
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => [
  { title: "Forgeon · Remix playground · About" },
  {
    name: "description",
    content:
      "About the Forgeon Remix playground: what it is and how to use it in your deploy tests.",
  },
];

export default function About() {
  return (
    <main className="forgeon-card">
      <div className="forgeon-back">
        <a href="/">← Back to home</a>
      </div>

      <div className="forgeon-eyebrow">About this playground</div>
      <h1 className="forgeon-title">Remix API wired for Forgeon tests.</h1>

      <p className="forgeon-text">
        This app isn’t a real product backend. It’s a <strong>safe demo</strong>{" "}
        you can deploy to Forgeon to check that:
      </p>

      <ul className="forgeon-list">
        <li>the container boots correctly,</li>
        <li>HTTP routing and base path settings are correct,</li>
        <li>HTML pages render fine through your gateway,</li>
        <li>you can later plug JSON APIs and health checks.</li>
      </ul>

      <p className="forgeon-text" style={{ marginTop: "0.9rem" }}>
        Once this is working, you can swap it out for real Remix apps, or other
        stacks (Next.js, Rust Axum, Go, etc.) while keeping the same deploy
        pipeline.
      </p>

      <div className="forgeon-meta">
        <span>
          Perfect for smoke tests, demo projects, and Forgeon onboarding.
        </span>
        <span className="forgeon-badge">playground · remix</span>
      </div>
    </main>
  );
}
