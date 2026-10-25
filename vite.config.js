import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// SITE_BASE lets the same build serve from a GitHub Pages sub-path.
export default defineConfig({
  base: process.env.SITE_BASE || "/",
  plugins: [react()],
});
