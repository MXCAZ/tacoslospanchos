import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/categories": {
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/api/products": {
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/api/orders": {
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    port: 3000,
  },
});
