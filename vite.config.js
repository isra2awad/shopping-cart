import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Enable CSS modules
    modules: true,

    // Customize CSS modules class names (optional)
    localsConvention: "camelCase", // or 'dashes' or 'asIs'
  },
  test: {
    environment: "jsdom",
  },
});
