/** base style */
import { FONT_SIZE } from '../../config/style';

/** breakpoints (in px) */
const breakpoints = {
	xxs: 320,
	xs: 386,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1500,
};

/** spacing */
const spacing = {
	basePadding: FONT_SIZE || 15, // in px
	multiplierFactor: 3,
};

const theme = {
	breakpoints,
	spacing,
};

export default theme;
