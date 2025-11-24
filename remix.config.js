/** @type {import('@remix-run/dev').AppConfig} */
export default {
  // 1. Core Runtime Configuration
  // Sets the server module output format to ES modules, which is standard
  // for modern Node.js environments and is required for Vite.
  serverModuleFormat: "esm",

  // 2. Ignored Files (Optional but recommended)
  // These files will not be processed by the Remix compiler, 
  // preventing errors on files like git and node artifacts.
  ignoredRouteFiles: ["**/*.css", "**/*.test.{js,jsx,ts,tsx}"],

  // 3. Future Flags (Remix 2.x recommended flags)
  // These flags enable next-generation features and behaviors that will
  // become default in future major versions of Remix.
  future: {
    // This is the most crucial flag for a Vite setup, enabling features 
    // like the CSS bundle and other Vite-related optimisations.
    v2_dev: true, 
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },

  // 4. Vite Specific Configuration (If not handled entirely by vite.config.js)
  // If you are using the Vercel adapter, you would configure the server build path 
  // here if it deviates from the default. Otherwise, the defaults often work well.
  // serverBuildPath: "build/server/index.js",
};