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

function Alert({ children }) {
	return <div>{children}</div>;
}

Alert.propTypes = {
	/** Make the Link act as other elements. */
	as: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.elementType,
	]),
	/** Disable the Link for being clicked. */
	type: PropTypes.bool,
};

Alert.defaultProps = {
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
)(Alert);
