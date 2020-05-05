/** npm packages */
import React, { Children, cloneElement } from 'react';
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

function Row({ forwardRef, children, space, ...rest }) {
	return (
		<Styles ref={forwardRef} space={space} {...rest}>
			{(children && typeof children === 'object' && (
				<>
					{(Children &&
						Children.map(children, (child) =>
							child ? cloneElement(child, { space }) : null,
						)) ||
						''}
				</>
			)) ||
				children}
		</Styles>
	);
}

Row.propTypes = {
	/** Global Props */
	...globalProps,

	/** Space between columns */
	space: PropTypes.number,

	/** Specifies the default alignment for items inside the flexible container. */
	alignItems: PropTypes.oneOf([
		'flex-start',
		'flex-end',
		'center',
		'stretch',
		'baseline',
	]),

	/** Modifies the behavior of the flex-wrap property */
	alignContent: PropTypes.oneOf([
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'stretch',
	]),

	/** Aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally). */
	justifyContent: PropTypes.oneOf([
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
	]),

	/** Specifies whether the flex item should wrap or not. */
	flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

	/** Specifies the direction of the flex item. */
	flexDirection: PropTypes.oneOf([
		'row',
		'row-reverse',
		'column',
		'column-reverse',
	]),
};

Row.defaultProps = {
	flexWrap: 'wrap',
};

export default compose(withForwardRef, withThemeConsumer, withGlobalProps)(Row);
