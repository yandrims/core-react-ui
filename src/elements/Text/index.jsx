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
};

Text.defaultProps = {};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Text);
