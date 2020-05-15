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

function Box({ forwardRef, children, ...rest }) {
	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
		</Styles>
	);
}

Box.propTypes = {
	/** Global Props */
	...globalProps,

	/** Background */
	customBackground: PropTypes.string,

	/** Color */
	customColor: PropTypes.string,

	/** Border */
	isBordered: PropTypes.bool,

	/** Border Width */
	borderWidth: PropTypes.number,

	/** Border Style */
	borderStyle: PropTypes.string,

	/** Border Color */
	borderColor: PropTypes.string,

	/** Border Radius */
	borderRadius: PropTypes.number,
};

Box.defaultProps = {
	isBordered: false,
	borderRadius: 0,
};

export default compose(withForwardRef, withThemeConsumer, withGlobalProps)(Box);
