// app/routes/info.tsx
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => [
  { title: "Forgeon · Remix playground · Info" },
  {
    name: "description",
    content:
      "Service overview for the Forgeon Remix playground: endpoints, purpose, and context.",
  },
];

export default function Info() {
  return (
    <main className="forgeon-card">
      <div className="forgeon-back">
        <a href="/">← Back to home</a>
      </div>

      <div className="forgeon-eyebrow">Forgeon · Remix playground</div>
      <h1 className="forgeon-title">Service overview</h1>

      <p className="forgeon-text">
        This tiny app is a <strong>Remix + React</strong> playground. It’s meant
        for testing how Forgeon talks to containers: health checks, routes, and
        HTML/JSON responses.
      </p>

      <div className="forgeon-pill-row">
        <div className="forgeon-pill">
          <strong>Mode</strong>&nbsp;Playground
        </div>
        <div className="forgeon-pill">Stack · Remix · React</div>
        <div className="forgeon-pill">No external DB required</div>
      </div>

      <p className="forgeon-text" style={{ marginTop: "1rem" }}>
        Quick endpoints you can hit:
      </p>

      <ul className="forgeon-list">
        <li>
          <code>GET /</code> – main playground landing card
        </li>
        <li>
          <code>GET /info</code> – this overview page
        </li>
        <li>
          <code>GET /about</code> – why this demo exists
        </li>
        <li>
          <code>GET /framework</code> – stack details
        </li>
        <li>
          <code>GET /edge</code> – Remix@Edge variant
        </li>
        {/* if you add a JSON status route later */}
        <li>
          <code>GET /status</code> – JSON health endpoint (optional)
        </li>
      </ul>

      <div className="forgeon-meta">
        <span>
          Use these endpoints to validate routing, probes, and logs inside
          Forgeon.
        </span>
        <span className="forgeon-badge">status · online</span>
      </div>
    </main>
  );
}
