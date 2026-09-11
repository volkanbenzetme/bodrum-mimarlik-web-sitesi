import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + vite-react-ssg build: `vite` for local CSR dev, `vite-react-ssg build`
// for a real static HTML file per route (SEO — see site/CLAUDE.md).
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  ssgOptions: {
    entry: "src/main.tsx",
    // '/hizmetler' -> 'dist/hizmetler/index.html' (not 'dist/hizmetler.html')
    // so GitHub Pages serves clean route URLs without a rewrite rule.
    dirStyle: "nested"
  }
});
