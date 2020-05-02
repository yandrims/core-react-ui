import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import multi from "rollup-plugin-multi-input";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";

const extensions = [".js", ".jsx"];
export default {
  input: ["src/**/*.jsx", "src/**/*.js"],
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: false,
    },
  ],
  external: ["react", "react-proptypes"],
  plugins: [
    resolve({
      browser: true,
      extensions,
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"],
      extensions,
    }),
    multi(),
    terser({
      compress: {
        inline: 1,
        drop_console: true,
      },
    }),
    uglify(),
  ],
};
