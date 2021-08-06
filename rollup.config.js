import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      preserveModulesRoot: "src",
    },
  ],
  plugins: [peerDepsExternal(), nodeResolve(), commonjs(), typescript()],
  external: ["react", "react-dom"],
};
