import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import cleaner from "rollup-plugin-cleaner";

import packageJson from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.ts";

const plugins = [
  // cleaner({
  //   targets: ["./lib"],
  // }),
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    typescript: require("typescript"),
    exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
  }),
];

export default [
  {
    input,
    output: {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  },
];

// const nodeResolve = require('@rollup/plugin-node-resolve');
// const path = require("path");
// const replace = require("@rollup/plugin-replace");

// export default {
//   input: "src/index.js",
//   output: [
//     {
//       file: `dist/index.min.js`,
//       // file: `dist/@${version}/index.min.js`,
//       format: "umd",
//       name: "myLib",
//       sourcemap: true,
//       //当入口文件有export时，'umd'格式必须指定name
//       //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
//     },
//     {
//       file: "./dist/my-lib-es.js",
//       format: "es",
//     },
//     {
//       file: "./dist/my-lib-cjs.js",
//       format: "cjs",
//     },
//   ],
//   // input: "src/index.js",
//   // output: {
//   //   file: "dist/index.min.js",
//   //   format: "cjs",
//   //   sourcemap: true,
//   // },
//   external: ["react"],
//   plugins: [
//     // typescript({
//     //   tsconfigOverride: {
//     //     compilerOptions: {
//     //       declaration: false, // 输出时去除类型文件
//     //     },
//     //   },
//     // }),
//     babel({
//       exclude: "node_modules/**",
//     }),
//     commonjs(),
//     // terser(),
//     peerDepsExternal(),
//     resolve(),
//     commonjs(),
//   ],
// };
