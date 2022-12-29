import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "https://needle-api.onrender.com",
        changeOrigin: true,
        secure: false
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  plugins: [react()],
});
