/** base style */
const baseStyle = {
	fontFamily:
		'"Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	fontSize: 15, // in px
	colorText: '#000000',
	colorPrimary: '#219191',
	colorPrimaryText: '#ffffff',
	colorDisabled: '#AAAAAA',
	colorDisabledText: '#EEEEEE',
	colorDark: '#1e3c3c',
	colorLight: '#caf7f7',
	colorLink: '#219191',
};

/** breakpoints */
const breakpoints = {
	xxs: 320, // in px
	xs: 386, // in px
	sm: 576, // in px
	md: 768, // in px
	lg: 992, // in px
	xl: 1200, // in px
	xxl: 1500, // in px
};

/** container */
const container = {
	padding: baseStyle.fontSize || 15, // in px
	maxWidth: 1366, // in px
};

/** spacing */
const spacing = {
	multiplierFactor: 3,
};

/** heading font size */
const headingFontSize = {
	h1: 10,
	h2: 9,
	h3: 8,
	h4: 7,
	h5: 6,
	h6: 5,
};

/** form config */
const formConfig = {
	borderWidth: 1, // in px
	borderRadius: 2,
	fontWeight: 400,
	fontSize: {
		default: 5,
		xxs: 2,
		xs: 3,
		sm: 4,
		md: 5,
		lg: 6,
		xl: 7,
		xxl: 8,
	},
	px: {
		default: 5,
		xxs: 2,
		xs: 3,
		sm: 4,
		md: 5,
		lg: 6,
		xl: 7,
		xxl: 8,
	},
	py: {
		default: 2.5,
		xxs: 1,
		xs: 1.5,
		sm: 2,
		md: 2.5,
		lg: 3,
		xl: 3.5,
		xxl: 4,
	},
};

export default {
	baseStyle,
	breakpoints,
	container,
	spacing,
	headingFontSize,
	formConfig,
};
