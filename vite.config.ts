import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hakumai-0kcal/",
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});
