// app/routes/framework.tsx
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => [
  { title: "Forgeon · Remix playground · Framework" },
  {
    name: "description",
    content:
      "Framework and runtime stack for the Forgeon Remix playground: Remix, React, and Edge-ready HTTP.",
  },
];

export default function Framework() {
  return (
    <main className="forgeon-card">
      <div className="forgeon-back">
        <a href="/">← Back to home</a>
      </div>

      <div className="forgeon-eyebrow">Framework stack</div>
      <h1 className="forgeon-title">What this Remix demo is built with.</h1>

      <div className="forgeon-grid" style={{ marginTop: "0.75rem" }}>
        <section>
          <p className="forgeon-text">
            The goal is to keep the stack simple, modern, and close to what
            you’d run in production:
          </p>

          <ul className="forgeon-list">
            <li>
              <strong>Remix</strong> for routing and server-side rendering.
            </li>
            <li>
              <strong>React</strong> for the UI layer.
            </li>
            <li>
              Edge-friendly runtime via <code>@vercel/remix</code> adapter.
            </li>
          </ul>

          <p className="forgeon-text" style={{ marginTop: "0.9rem" }}>
            You can attach real data sources later (Postgres, Redis, HTTP
            APIs), but the playground stays zero-dependency by default.
          </p>
        </section>

        <section>
          <p className="forgeon-text">
            How this helps inside Forgeon:
          </p>

          <ul className="forgeon-list">
            <li>Validate simple HTTP routing quickly.</li>
            <li>Compare container vs. edge deployments.</li>
            <li>Check timeouts, probes, and logging behavior.</li>
          </ul>

          <p className="forgeon-text" style={{ marginTop: "0.9rem" }}>
            When you’re ready for the real thing, you keep the same patterns,
            just swap in your actual app.
          </p>
        </section>
      </div>

      <div className="forgeon-meta">
        <span>Remix today, any framework tomorrow. Forgeon doesn’t mind.</span>
        <span className="forgeon-badge">stack · remix · react</span>
      </div>
    </main>
  );
}
