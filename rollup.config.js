import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import multi from "rollup-plugin-multi-input";
import { terser } from "rollup-plugin-terser";

export default {
  input: ["src/**/*.tsx", "!src/**/*.test.tsx"],
  output: [
    {
      dir: "dist",
      format: "es",
      sourcemap: false
    },
    {
      dir: "dist",
      format: "cjs",
      sourcemap: false
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js", "**/*.test.tsx"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    sass({
      insert: true
    }),
    multi(),
    terser()
  ]
};
