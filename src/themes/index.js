/** base style */
const baseStyle = {
	fontFamily:
		'"Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
	fontSize: 15, // in px
	colorPrimary: '#219191',
	colorPrimaryText: '#ffffff',
	colorDark: '#1e3c3c',
	colorLight: '#caf7f7',
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

/** button */
const button = {
	borderWidth: 1,
	borderRadius: 4,
	fontWeight: 600,
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

/** combine theme */
const theme = { baseStyle, breakpoints, button, container, spacing };

export default theme;
