// rollup.config.js
export default {
    input: 'src/rollupjs.js',
    output: {
        file: 'dist/rollupjs.js',
        format: 'iife',
        name: 'myApp',
    },
    sourceMap: true,
  };