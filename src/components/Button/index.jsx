/** npm packages */
import React from 'react';
import PropTypes from 'prop-types';
// import { compose } from 'recompose';
import styled from 'styled-components';

/** helpers */
/* import {
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
} from '../../helpers/hoc'; */

function Button({ children }) {
	const Styles = styled.button`
		background: red;
		color: white;
	`;

	return (
		<Styles style={{ padding: 30 }} type="button">
			{children}
		</Styles>
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

export default Button;
