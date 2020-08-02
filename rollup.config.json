import ts from "@wessberg/rollup-plugin-ts";
import pkg from "./package.json";

export default {
  input: "src/client.ts",
  output: [
    { file: "dist/client.js", format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [ts()],
  external: ["node-fetch"],
};
