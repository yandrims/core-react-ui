/** npm packages */
import { createGlobalStyle } from 'styled-components';

/** theme */
import COLORS from '../constants/colors';
import THEME from '../themes';

const { GREY } = COLORS.PALETTE;
const { PRIMARY, PRIMARY_TEXT } = COLORS.COLOR;

const mainFontSize = ({ theme = {} }) => {
	const { baseStyle = {} } = theme;
	const {
		fontSize = THEME && THEME.baseStyle && THEME.baseStyle.fontSize,
	} = baseStyle;

	return `${fontSize || 15}px`;
};

const customScrollBar = ({ isCustomScrollBar, theme = {} }) => {
	const { baseStyle = {} } = theme;
	const { colorPrimary = PRIMARY } = baseStyle;

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
	const { baseStyle = {} } = theme;
	const { colorPrimary = PRIMARY, colorPrimaryText = PRIMARY_TEXT } = baseStyle;

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
    -webkit-font-smoothing: antialiased;
    letter-spacing: normal;
    font-style: normal;
		font-weight: normal;
		font-size: ${mainFontSize}
	}

	a {
		background-color: transparent;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
	}

	img {
		max-width: 100%;
		border-style: none;
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

	${customScrollBar}
	${customSelection}
	${({ globalStyles }) => globalStyles || ''}
`;

export default Styles;
