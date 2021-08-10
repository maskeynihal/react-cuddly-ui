import styles from "rollup-plugin-styles";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  mode: "development",
  plugins: [
    peerDepsExternal(),
    typescript(),
    styles({
      modules: true,
      sourceMap: true,
    }),
  ],
  external: ["react", "react-dom"],
};
