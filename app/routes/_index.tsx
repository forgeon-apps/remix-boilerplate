// app/routes/_index.tsx
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "Forgeon · Remix playground" },
    {
      name: "description",
      content:
        "Remix demo used to test routing, health checks, and HTML responses before deploying to Forgeon.",
    },
  ];
};

export default function Index() {
  return (
    <main className="forgeon-card">
      <div className="forgeon-grid">
        <div>
          <div className="forgeon-eyebrow">Forgeon · Remix playground</div>
          <h1 className="forgeon-title">
            Remix boilerplate, ready for deploy tests.
          </h1>
          <p className="forgeon-text">
            This service is a small Remix HTTP app you can use to test routing,
            health checks, JSON APIs, and HTML responses inside Forgeon or on
            your local machine.
          </p>

          <div className="forgeon-pill-row">
            <div className="forgeon-pill">
              <strong>GET</strong> /
            </div>
            <div className="forgeon-pill">Remix · React · Edge-ready</div>
            <div className="forgeon-pill">
              Playground mode (no external DB required)
            </div>
          </div>
        </div>

        <div>
          <div className="forgeon-links">
            <a href="/info">
              /info
              <span>– service overview & Forgeon context</span>
            </a>
            <a href="/about">
              /about
              <span>– what this boilerplate is for</span>
            </a>
            <a href="/framework">
              /framework
              <span>– stack: Remix, React, Edge runtime</span>
            </a>
            <a href="/status">
              /status
              <span>– JSON health endpoint (example)</span>
            </a>
            <a href="/edge">
              /edge
              <span>– Remix@Edge variant</span>
            </a>
          </div>
        </div>
      </div>

      <div className="forgeon-meta">
        <span>
          Try deploying this Remix app to Forgeon as a simple playground.
        </span>
        <span className="forgeon-badge">127.0.0.1:3000</span>
      </div>
    </main>
  );
}
