const glob = require('glob');
const { basename, dirname, resolve } = require('path');
const { render } = require('node-sass');
const { execSync } = require('child_process');
const { outputFileSync } = require('fs-extra');
const replace = require('replace-in-file');
const cpx = require('cpx');

const srcPath = 'src';
const distPath = 'dist';
const { modules } = require('./modules');

const scss = [];
const js = ['index.js', ...modules];

if (modules && modules.length) {
	modules.forEach((elm) => {
		scss.push(`${elm}/**/*.scss`);
	});
}

if (scss && scss.length) {
	scss.forEach((elm) => {
		glob(`${srcPath}/${elm}`, (error, files) => {
			files.forEach((file) => renderCSS(file));
		});
	});
}

if (js && js.length) {
	js.forEach((elm) => {
		execSync(
			`babel ${srcPath}/${elm} --out-dir ${distPath}${
				(elm !== 'index.js' && `/${elm}`) || ''
			} ${process.env.DEVELOPMENT ? '--source-maps' : ''} --presets minify`,
			{ stdio: 'inherit' },
		);
	});
}

replaceSCSSImportsInFolder(distPath);
cpx.copySync(resolve(srcPath, 'assets', '**'), resolve(distPath, 'assets'));

/* ============================== functions ================================= */

function renderCSS(file) {
	const fileName = basename(file, '.scss');
	const fileDir = dirname(file).replace(srcPath, distPath);
	const outFile = `${fileDir}/${fileName}.css`;
	const outMap = `${fileDir}/${fileName}.css.map`;

	render(
		{
			file,
			outFile,
			outputStyle: 'compressed',
			sourceMap: true,
		},
		(error, result) => {
			if (!error) {
				outputFileSync(outFile, result.css, (err) => err && console.log(err));
				if (process.env.DEVELOPMENT) {
					outputFileSync(outMap, result.map, (err) => err && console.log(err));
				}
			} else {
				console.log(error);
			}
		},
	);
}

function replaceSCSSImportsInFolder(folder) {
	glob(`${folder}/**/*.{js,js.map}`, (error, files) => {
		files.forEach(async (file) => {
			const options = {
				files: file,
				from: /\.scss/g,
				to: '.css',
			};

			try {
				await replace(options);
			} catch (err) {
				console.error('Error occurred:', err);
			}
		});
	});
}
