/** npm packages */
import React from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'recompose';

/** helpers */
import {
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
} from '../../helpers/hoc';

/** styles */
import Styles from './Styles';

function Row({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Row.propTypes = {};

Row.defaultProps = {};

export default compose(withForwardRef, withThemeConsumer, withGlobalProps)(Row);
