/** theme */
import THEME from '../themes';

const { baseStyle } = THEME;
const { colorPrimary, colorPrimaryText, colorDisabled, colorDisabledText } =
	baseStyle;

/** palette */
const PALETTE = {
	BLACK: '#000000',
	BLUE: '#0000FF',
	BLUE_DARK: '#0000AF',
	BLUE_LIGHT: '#8BBBFF',
	BROWN: '#523809',
	CYAN: '#00FFFF',
	GOLD: '#CBBC29',
	GREEN: '#52AE4C',
	GREEN_DARK: '#007300',
	GREEN_LIGHT: '#00D400',
	GREY: '#AAAAAA',
	GREY_DARK: '#888888',
	GREY_LIGHT: '#EEEEEE',
	LIME: '#00FF00',
	MAGENTA: '#FF00FF',
	MAROON: '#800000',
	NAVY: '#000080',
	OLIVE: '#808000',
	ORANGE: '#F4792C',
	PURPLE: '#800080',
	RED: '#FF0000',
	RED_DARK: '#890000',
	RED_LIGHT: '#FFB8C3',
	SILVER: '#C0C0C0',
	TEAL: '#008080',
	TRANSPARENT: ' transparent',
	TURQUOISE: '#12B9D2',
	WHITE: '#FFFFFF',
	YELLOW: '#ffeb00',
};

const { BLACK, BLUE, GREEN, GREY, GREY_LIGHT, RED, TURQUOISE, YELLOW, WHITE } =
	PALETTE;

const COLOR = {
	PRIMARY: colorPrimary || TURQUOISE,
	PRIMARY_TEXT: colorPrimaryText || WHITE,
	DISABLED: colorDisabled || GREY,
	DISABLED_TEXT: colorDisabledText || GREY_LIGHT,
};

const STATUS = {
	SUCCESS: GREEN,
	SUCCESS_TEXT: WHITE,
	INFO: BLUE,
	INFO_TEXT: WHITE,
	WARNING: YELLOW,
	WARNING_TEXT: BLACK,
	DANGER: RED,
	DANGER_TEXT: WHITE,
};

export default { PALETTE, COLOR, STATUS };
