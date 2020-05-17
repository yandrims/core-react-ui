/** npm packages */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

/** style */
import Styles from './styles';

/** helpers */
import globalProps from '../../helpers/globalProps';
import {
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
} from '../../helpers/hoc';
import { getObjectValues } from '../../helpers/utils';

/** constants */
import GLOBAL_VARIANTS from '../../constants/globalVariants';
import FONT_VARIANTS from '../../constants/fontVariants';

function Text({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Text.propTypes = {
	/** Global Props */
	...globalProps,

	/** Color Variant */
	colorVariant: PropTypes.oneOf([
		'black',
		'blue',
		'blue_dark',
		'blue_light',
		'brown',
		'cyan',
		'gold',
		'green',
		'green_dark',
		'green_light',
		'grey',
		'grey_dark',
		'grey_light',
		'lime',
		'magenta',
		'maroon',
		'navy',
		'olive',
		'orange',
		'purple',
		'red',
		'red_dark',
		'red_light',
		'silver',
		'teal',
		'transparent',
		'turquoise',
		'white',
		'yellow',
	]),

	/** Color */
	color: PropTypes.string,

	/** Text Size Variant */
	sizeVariant: PropTypes.oneOf(getObjectValues(GLOBAL_VARIANTS.SIZE)),

	/** Text Style */
	textStyle: PropTypes.oneOf(getObjectValues(FONT_VARIANTS.STYLE)),

	/** Text Transform */
	textTransform: PropTypes.oneOf(getObjectValues(FONT_VARIANTS.TRANSFORM)),

	/** Text Weight */
	textWeight: PropTypes.oneOf(getObjectValues(FONT_VARIANTS.WEIGHT)),

	/** Text Size */
	textSize: PropTypes.number,

	/** Text Truncated */
	isTruncated: PropTypes.bool,

	/** Text Truncated Max Line */
	truncatedMaxLine: PropTypes.number,
};

Text.defaultProps = {
	isTruncated: false,
	truncatedMaxLine: 1,
};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Text);
