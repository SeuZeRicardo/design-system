import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/index.ts",
    "src/components/index.ts",
    "src/icons/index.ts",
    "src/tokens/index.ts",
    "src/themes/index.ts",
  ],
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
