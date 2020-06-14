/** npm packages */
import { createGlobalStyle } from 'styled-components';

/** theme */
import COLORS from '../constants/colors';
import THEME from '../themes';

/** helpers */
import { deepMerge, rem } from './utils';

const { BLACK, GREY } = COLORS.PALETTE;
const { PRIMARY, PRIMARY_TEXT } = COLORS.COLOR;

const mainFontSize = ({ theme = {} }) => {
	const mergedTheme = theme ? deepMerge(THEME, theme) : THEME;
	const {
		baseStyle: { fontSize },
	} = mergedTheme;

	return `${fontSize || 15}px`;
};

const mainFontColor = ({ theme = {} }) => {
	const mergedTheme = theme ? deepMerge(THEME, theme) : THEME;
	const {
		baseStyle: { colorText = BLACK },
	} = mergedTheme;

	return colorText;
};

const headingFontSizes = ({ theme = {} }) => {
	const mergedTheme = theme ? deepMerge(THEME, theme) : THEME;
	const {
		baseStyle: { fontSize },
		spacing: { multiplierFactor: factor = 1 },
		headingFontSizes: { h1, h2, h3, h4, h5, h6 },
	} = mergedTheme;

	return `
		h1 { font-size: ${rem(h1 * factor, fontSize)}; }
		h2 { font-size: ${rem(h2 * factor, fontSize)}; }
		h3 { font-size: ${rem(h3 * factor, fontSize)}; }
		h4 { font-size: ${rem(h4 * factor, fontSize)}; }
		h5 { font-size: ${rem(h5 * factor, fontSize)}; }
		h6 { font-size: ${rem(h6 * factor, fontSize)}; }
	`;
};

const customScrollBar = ({ isCustomScrollBar, theme = {} }) => {
	const mergedTheme = theme ? deepMerge(THEME, theme) : THEME;
	const {
		baseStyle: { colorPrimary = PRIMARY },
	} = mergedTheme;

	return `
		${
			(isCustomScrollBar &&
				`
					&::-webkit-scrollbar { width: 10px;height: 8px; }
					&::-webkit-scrollbar-track { background-color: ${GREY};border-left: 1px solid ${colorPrimary}; }
					&::-webkit-scrollbar-thumb { background-color: ${colorPrimary};transition: .3s;cursor: pointer; }
					&::-webkit-scrollbar-track, 
					&::-webkit-scrollbar-thumb { border-radius: 0;box-shadow: none;border: 0;}
			`) ||
			''
		}
	`;
};

const customSelection = ({ isCustomSelection = true, theme = {} }) => {
	const mergedTheme = theme ? deepMerge(THEME, theme) : THEME;
	const {
		baseStyle: { colorPrimary = PRIMARY, colorPrimaryText = PRIMARY_TEXT },
	} = mergedTheme;

	return `
		${
			(isCustomSelection &&
				`
				::selection {
					background: ${colorPrimary};
					color: ${colorPrimaryText};
				}
			`) ||
			''
		}
	`;
};

const Styles = createGlobalStyle`
	* { 
		outline: none; 
	}

	html, body { 
		margin: 0;
		padding: 0;
		box-sizing: border-box; 
	}

	html {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
	}

	body { 
    min-width: 300px;
    min-height: 100%;
    -webkit-font-smoothing: auto;
    letter-spacing: normal;
    font-style: normal;
		font-weight: normal;
		font-size: ${mainFontSize}
		color: ${mainFontColor}
	}

	a {
		background-color: transparent;
    text-decoration: none;
    &:hover {
			text-decoration: none;
    }
		&:active {
			color: initial;
		}
	}

	img {
		max-width: 100%;
		border-style: none;
		height: auto;

		&[alt] {
			color: $color-transparent;
			text-indent: -9999px;
			font-size: 0;
		}
	}

	main {
		display: block;
	}

	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
	}

	button,
	input {
		overflow: visible;
	}
	
	button,
	select {
		text-transform: none;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	textarea {
		overflow: auto;
	}

	[type="checkbox"],
	[type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}

	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	[type="search"] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}

	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}

	[hidden] {
		display: none;
	}

	table {
		border-collapse: collapse;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin: 0;
	}

	ul, ol {
		margin-top: 0;
		margin-bottom: 0;
	}

	${headingFontSizes}
	${customScrollBar}
	${customSelection}
	${({ globalStyles }) => globalStyles || ''}
`;

export default Styles;
