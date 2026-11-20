import path from "node:path";
import { fileURLToPath } from "node:url";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

// VITE_BASE_PATH : "/" en local, "/nom-du-depot/" sur GitHub Pages (renseigné par le workflow).
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  resolve: { alias: { "@": path.resolve(root, "src") } },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.js",
    }),
    react(),
  ],
});
