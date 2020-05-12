/** npm packages */
import React from 'react';
// import PropTypes from 'prop-types';
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

function Popover({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Popover.propTypes = {
	/** Global Props */
	...globalProps,
};

Popover.defaultProps = {};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Popover);
