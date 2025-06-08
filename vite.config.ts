import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import terser from "@rollup/plugin-terser";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  plugins: [vue(), terser()],
  server: {
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt'),
    },
    host: '192.168.3.5',
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
