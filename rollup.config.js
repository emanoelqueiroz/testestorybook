import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

// TODO: resolver external popper.js
export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
      }),
      resolve({
        extensions: ['.ts', '.tsx', 'js', '.jsx', '.json']
      }),
      commonjs(),
      external(),
      terser(),
    ]
  }
];