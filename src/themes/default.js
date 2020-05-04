/** base style */
import { FONT_SIZE } from '../../config/style';

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

/** spacing */
const spacing = {
	multiplierFactor: 3,
};

/** container */
const container = {
	padding: FONT_SIZE || 15, // in px
	maxWidth: 1366, // in px
};

export default {
	breakpoints,
	spacing,
	container,
};
