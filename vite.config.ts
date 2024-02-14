import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/VLT_ONE",
  plugins: [react()],
  build: {
    sourcemap: true, // hoặc false tùy thuộc vào nhu cầu của bạn
  },
});
