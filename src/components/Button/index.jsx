/** npm packages */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

/** helpers */
import {
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
} from '../../helpers/hoc';

function Button({ children, borderRadius, bgcolor, color, padding, fontSize }) {
	return (
		<button
			type="button"
			style={{
				cursor: 'pointer',
				borderRadius,
				boxShadow: '1px 3px 2px rgba(0,0,0,0.5)',
				backgroundColor: bgcolor,
				color,
				padding,
				fontSize,
			}}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	/** Make the Link act as other elements. */
	as: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.elementType,
	]),
	/** Disable the Link for being clicked. */
	type: PropTypes.bool,
};

Button.defaultProps = {
	bgcolor: '#05224e',
	color: '#fff',
	padding: '20px',
	fontSize: '1.1rem',
	borderRadius: '5px',
};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Button);
