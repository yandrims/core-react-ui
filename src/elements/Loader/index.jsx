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

function Loader({ forwardRef, children, ...rest }) {
	return <Styles ref={forwardRef} {...rest} />;
}

Loader.propTypes = {
	/** Global Props */
	...globalProps,

	/** Size */
	size: PropTypes.number,

	/** Color */
	color: PropTypes.string,
};

Loader.defaultProps = {
	size: 10,
};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Loader);
