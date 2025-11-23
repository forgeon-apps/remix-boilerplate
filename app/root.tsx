// app/root.tsx
import type { LinksFunction, MetaFunction } from "@vercel/remix";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Forgeon · Remix playground" },
    {
      name: "description",
      content:
        "A small Remix app used to test routing, health checks, and HTML pages before deploying to Forgeon.",
    },
  ];
};

export const links: LinksFunction = () => {
  return [];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        {/* Global style – mirrored from the Rust HTML shell */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root {
  color-scheme: dark;
  --bg: #050505;
  --card: #0f0f10;
  --border: #222;
  --text: #f5f5f5;
  --muted: #9ca3af;
  --accent: #e5e5e5;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body.forgeon-body {
  min-height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  background: radial-gradient(circle at top, #111 0, #050505 55%);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
}
.forgeon-card {
  width: 100%;
  max-width: 720px;
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  background: radial-gradient(circle at top left, #151515 0, var(--card) 50%, #050505 100%);
  padding: 1.75rem 1.75rem 1.5rem;
}
.forgeon-eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.75rem;
}
.forgeon-title {
  font-size: 1.6rem;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}
.forgeon-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--muted);
}
.forgeon-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
}
@media (max-width: 640px) {
  .forgeon-grid {
    grid-template-columns: 1fr;
  }
}
.forgeon-pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1.25rem 0 0.75rem;
}
.forgeon-pill {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
}
.forgeon-pill strong {
  color: var(--accent);
  font-weight: 600;
}
.forgeon-links {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
}
.forgeon-links a {
  color: var(--accent);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}
.forgeon-links a span {
  font-size: 0.75rem;
  color: var(--muted);
}
.forgeon-links a:hover {
  text-decoration: underline;
}
.forgeon-meta {
  margin-top: 1.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: var(--muted);
}
.forgeon-badge {
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
.forgeon-back {
  font-size: 0.8rem;
  margin-bottom: 1rem;
}
.forgeon-back a {
  color: var(--muted);
  text-decoration: none;
}
.forgeon-back a:hover {
  color: var(--accent);
  text-decoration: underline;
}
.forgeon-list {
  padding-left: 1rem;
  margin-top: 0.6rem;
  font-size: 0.85rem;
  color: var(--muted);
}
          `,
          }}
        />
      </head>
      <body className="forgeon-body">
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
