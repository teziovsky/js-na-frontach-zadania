import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      framework: path.resolve(__dirname, "src/framework"),
      shop: path.resolve(__dirname, "src/shop"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
});
