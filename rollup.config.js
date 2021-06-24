import { DEFAULT_EXTENSIONS } from '@babel/core';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import { terser } from "rollup-plugin-terser";
// import dts from 'rollup-plugin-dts';
// import typescript from 'rollup-plugin-typescript2';
import typescript from '@rollup/plugin-typescript';
// import eslint from '@rollup/plugin-eslint';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';

import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

import packageJson from './package.json';

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];
const input = 'src/index.ts';
// const production = !process.env.ROLLUP_WATCH;

const footer = `
if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '${packageJson.version}'
}`;

const plugins = [
  // eslint({
  //   throwOnError: true,
  //   include: ['src/**'],
  //   exclude: ['node_modules/**', 'lib/**', 'umd/**', 'types/**']
  // }),
  cleaner({
    targets: ['./lib, ./umd']
  }),
  resolve({ extensions }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    extensions
  }),
  commonjs({ sourceMap: false }),
  peerDepsExternal(),
  typescript(),
  // typescript({
  // typescript: require('typescript'),
  // noEmitOnError: true
  // include: ['src/**/*'],
  // exclude: ['node_modules', '**/*.stories.tsx', '**/*.test.tsx'],
  // useTsconfigDeclarationDir: true
  // }),
  postcss({
    // extensions: ['.css', '.scss', '.sass'],
    plugins: [autoprefixer()],
    extract: true,
    modules: { generateScopedName: '[local]' }
    // use: ['sass'],
    // minimize: true
  })
  // production && terser()
];

export default {
  input,
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      footer
    },
    {
      file: packageJson.main,
      format: 'cjs',
      footer
    },
    {
      file: packageJson.unpkg,
      format: 'umd',
      name: 'myLib',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
      },
      footer
    }
  ],
  // 告訴 rollup 哪些檔案不需要一起被打包
  external: ['react', 'react-dom', 'prop-types', /@babel\/runtime/],
  plugins
};
