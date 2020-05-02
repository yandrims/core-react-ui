/* eslint-disable global-require */
/* eslint-disable radix */
// const path = require('path');
const srcPath = 'src';
const notesPath = `${srcPath}/notes`;
const assetsPath = `${srcPath}/assets`;

module.exports = {
	title: 'Core UI Library',
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
		fontFamily: {
			base: '"Open Sans", sans-serif',
		},
	},
	styles: {
		Playground: {
			preview: {
				fontFamily: '"Open Sans", sans-serif',
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
