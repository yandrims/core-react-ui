import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import multi from 'rollup-plugin-multi-input';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

const extensions = ['.js', '.jsx'];
export default {
	input: ['src/**/*.jsx', 'src/**/*.js'],
	output: [
		{
			dir: 'dist',
			format: 'cjs',
			sourcemap: false,
		},
	],
	external: ['react', 'react-proptypes', 'styled-components'],
	plugins: [
		resolve({
			browser: true,
			extensions,
		}),
		commonjs({
			include: 'node_modules/**',
			// left-hand side can be an absolute path, a path
			// relative to the current directory, or the name
			// of a module in node_modules
			namedExports: {
				'node_modules/react/index.js': [
					'cloneElement',
					'createContext',
					'Component',
					'createElement',
				],
				'node_modules/react-dom/index.js': ['render', 'hydrate'],
				'node_modules/react-is/index.js': [
					'typeOf',
					'isElement',
					'isValidElementType',
					'ForwardRef',
				],
			},
		}),
		babel({
			exclude: 'node_modules/**',
			presets: ['@babel/env', '@babel/preset-react'],
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
