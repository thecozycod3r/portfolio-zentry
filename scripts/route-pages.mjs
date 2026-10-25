// GitHub Pages has no SPA fallback: give every route its own index.html
// (and a 404.html) so deep links and refreshes load the app.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { websites } from "../src/data/websites.js";

const dist = new URL("../dist/", import.meta.url);
const index = new URL("index.html", dist);
let projects = [];
if (existsSync(new URL("../src/data/projects.js", import.meta.url))) {
  ({ projects } = await import("../src/data/projects.js"));
}
const routes = [
  ...projects.map((p) => `work/${p.slug}`),
  ...websites.map((w) => `websites/${w.slug}`),
];
for (const r of routes) {
  const dir = new URL(`${r}/`, dist);
  mkdirSync(dir, { recursive: true });
  copyFileSync(index, new URL("index.html", dir));
}
copyFileSync(index, new URL("404.html", dist));
console.log(`route pages: ${routes.length} + 404.html`);
