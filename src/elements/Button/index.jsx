import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, borderRadius, bgcolor, color, padding, fontSize }) {
	return (
		<div>
			<button
				className="custombutton"
				style={{
					cursor: 'pointer',
					borderRadius: borderRadius,
					boxShadow: '1px 3px 2px rgba(0,0,0,0.5)',
					backgroundColor: bgcolor,
					color: color,
					padding: padding,
					fontSize: fontSize,
				}}
			>
				{children}
			</button>
		</div>
	);
}

Button.propTypes = {
	/**
	 * Background Color
	 */
	backgroundColor: PropTypes.string,

	/**
	 * Id of button need to pass to link
	 */
	id: PropTypes.string,
};

Button.defaultProps = {
	bgcolor: '#05224e',
	color: '#fff',
	padding: '20px',
	fontSize: '1.1rem',
	borderRadius: '5px',
};

export default Button;
