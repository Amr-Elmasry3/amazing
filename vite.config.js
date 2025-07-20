import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_NOT_FOUND") return;
        warn(warning);
      },
    },
  },
  base: "/amazing/",
});
