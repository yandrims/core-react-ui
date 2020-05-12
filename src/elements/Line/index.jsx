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

function Line({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Line.propTypes = {
	/** Global Props */
	...globalProps,
};

Line.defaultProps = {};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Line);
