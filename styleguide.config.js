/* eslint-disable global-require */
/* eslint-disable radix */

const FONT_FAMILY =
	'"Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
const FONT_SIZE = 15; // in px
const COLOR_PRIMARY = '#219191';
const COLOR_DARK = '#1e3c3c';
const COLOR_LIGHT = '#caf7f7';

// const path = require('path');
const srcPath = 'src';
const notesPath = `${srcPath}/notes`;
const assetsPath = `${srcPath}/assets`;

module.exports = {
	title: 'Y-UI Library',
	serverPort: (process.env.PORT && parseInt(process.env.PORT)) || 3001,
	assetsDir: [assetsPath],
	usageMode: 'expand',
	exampleMode: 'expand',
	styleguideDir: 'docs',
	handlers: (componentPath) =>
		require('react-docgen').defaultHandlers.concat(
			require('react-docgen-external-proptypes-handler')(componentPath),
			require('react-docgen-displayname-handler').createDisplayNameHandler(
				componentPath,
			),
		),
	template: {
		favicon: 'favicon.ico',
	},
	theme: {
		color: {
			base: COLOR_DARK,
			light: '#767676',
			lightest: '#ccc',
			link: COLOR_DARK,
			linkHover: COLOR_PRIMARY,
			focus: 'rgba(22, 115, 177, 0.25)',
			border: '#a0f9f9',
			name: '#690',
			type: '#905',
			error: '#c00',
			baseBackground: '#fff',
			codeBackground: '#e8f7f7',
			sidebarBackground: COLOR_LIGHT,
			ribbonBackground: '#e90',
			ribbonText: '#fff',
			// Based on default Prism theme
			codeBase: COLOR_DARK,
			codeComment: '#6d6d6d',
			codePunctuation: '#999',
			codeProperty: '#905',
			codeDeleted: '#905',
			codeString: '#690',
			codeInserted: '#690',
			codeOperator: '#9a6e3a',
			codeKeyword: '#1673b1',
			codeFunction: '#DD4A68',
			codeVariable: '#e90',
		},
		fontFamily: {
			base: FONT_FAMILY,
		},
		fontSize: {
			base: FONT_SIZE,
			text: FONT_SIZE,
			small: FONT_SIZE * 0.8,
			h1: FONT_SIZE * 2,
			h2: FONT_SIZE * 1.5,
			h3: FONT_SIZE * 1.25,
			h4: FONT_SIZE * 1,
			h5: FONT_SIZE * 0.9,
			h6: FONT_SIZE * 0.85,
		},
		sidebarWidth: 250,
		borderRadius: 6,
	},
	styles: {
		Playground: {
			preview: {
				fontFamily: FONT_FAMILY,
			},
		},
		Logo: {
			logo: {
				color: COLOR_PRIMARY,
			},
		},
	},
	sections: [
		{
			name: 'Documentation',
			sections: [
				{
					name: 'Introduction',
					content: `${notesPath}/introduction.md`,
				},
				{
					name: 'Customization',
					content: `${notesPath}/customize.md`,
				},
				{
					name: 'Global Props',
					content: `${notesPath}/globalProps.md`,
				},
			],
		},
		{
			name: 'Elements',
			components: `${srcPath}/elements/**/*.jsx`,
			sectionDepth: 2,
		},
		{
			name: 'Components',
			components: `${srcPath}/components/**/*.jsx`,
			sectionDepth: 2,
		},
		{
			name: 'Widgets',
			components: `${srcPath}/widgets/**/*.jsx`,
			sectionDepth: 2,
		},
	],
	pagePerSection: true,
};
