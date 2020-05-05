/** npm packages */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

/** style */
import Styles from './Styles';

/** helpers */
import globalProps from '../../helpers/globalProps';
import {
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
} from '../../helpers/hoc';

function Col({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Col.propTypes = {
	/** Global Props */
	...globalProps,

	/** Specifies the alignment for the selected item inside the flexible container. */
	alignSelf: PropTypes.oneOf([
		'auto',
		'flex-start',
		'flex-end',
		'center',
		'baseline',
		'stretch',
	]),
	/** Should be a number between 1 - 12 */
	col: PropTypes.number,

	/** Size the column based on the natural width of its content */
	isAutoWidth: PropTypes.bool,

	/** Specifies the order of a flexible item relative to the rest of the flexible items inside the same container */
	order: PropTypes.number,

	/** Specifies how much the item will grow relative to the rest of the flexible items inside the same container */
	flexGrow: PropTypes.number,

	/** Specifies how the item will shrink relative to the rest of the flexible items inside the same container */
	flexShrink: PropTypes.number,

	/** Specifies the initial length of a flexible item. */
	flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Col.defaultProps = {};

export default compose(withForwardRef, withThemeConsumer, withGlobalProps)(Col);
