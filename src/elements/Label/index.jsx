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

function Label({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Label.propTypes = {
	/** Global Props */
	...globalProps,
};

Label.defaultProps = {};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Label);
