import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

// var arrow = require('@popperjs/core/lib/modifiers/arrow');
// var computeStyles = require('@popperjs/core/lib/modifiers/computeStyles');
// var eventListeners = require('@popperjs/core/lib/modifiers/eventListeners');
// var flip = require('@popperjs/core/lib/modifiers/flip');
// var hide = require('@popperjs/core/lib/modifiers/hide');
// var offset = require('@popperjs/core/lib/modifiers/offset');
// var popperOffsets = require('@popperjs/core/lib/modifiers/popperOffsets');
// var preventOverflow = require('@popperjs/core/lib/modifiers/preventOverflow');
// var enums = require('@popperjs/core/lib/enums');
// var popperBase = require('@popperjs/core/lib/popper-base');

// TODO: resolver external popper.js
export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    external: [
      '@popperjs/core/lib/modifiers/arrow',
      '@popperjs/core/lib/modifiers/computeStyles',
      '@popperjs/core/lib/modifiers/eventListeners',
      '@popperjs/core/lib/modifiers/flip',
      '@popperjs/core/lib/modifiers/hide',
      '@popperjs/core/lib/modifiers/offset',
      '@popperjs/core/lib/modifiers/popperOffsets',
      '@popperjs/core/lib/modifiers/preventOverflow',
      '@popperjs/core/lib/enums',
      '@popperjs/core/lib/popper-base',
      'prop-types-extra/lib/isRequiredForA11y',
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
      // comentar esse cara pra ver as coisa no index.js
      terser(),
    ]
  }
];