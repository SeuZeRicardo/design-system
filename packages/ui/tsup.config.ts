import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx", "src/tokens/index.ts", "src/themes/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  target: "es2020",
  ...options,
}));
