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

function Container({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Container.propTypes = {
	/** Global Props */
	...globalProps,

	/** Full width container, spanning the entire width of the viewport */
	isFluid: PropTypes.bool,
};

Container.defaultProps = {
	isFluid: false,
};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Container);
