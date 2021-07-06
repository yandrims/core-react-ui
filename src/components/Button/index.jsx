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

/** constants */
import GLOBAL_VARIANTS from '../../constants/globalVariants';

/** elements */
import Loader from '../../elements/Loader';

function Button({ forwardRef, children, isLoading, isDisabled, ...rest }) {
	return (
		<Styles
			ref={forwardRef}
			disabled={isLoading || isDisabled}
			isLoading={isLoading}
			isDisabled={isDisabled}
			{...rest}
		>
			{(isLoading && (
				<span>
					<Loader className="loader" />
				</span>
			)) ||
				null}
			{children}
		</Styles>
	);
}

Button.propTypes = {
	/** Global Props */
	...globalProps,

	/** Full width */
	isBlock: PropTypes.bool,

	/** Border Radius */
	borderRadius: PropTypes.number,

	/** Size */
	size: PropTypes.oneOf(Object.values(GLOBAL_VARIANTS.SIZE)),

	/** Variant */
	variant: PropTypes.oneOf(Object.values(GLOBAL_VARIANTS.COLOR_THEMES)),

	/** Button loading indicator */
	isLoading: PropTypes.bool,

	/** Disabled indicator */
	isDisabled: PropTypes.bool,

	/** Reverse the color of given color variant */
	isOutlined: PropTypes.bool,

	/** onClick action */
	onClick: PropTypes.func,

	/** onMouseOver action */
	onMouseOver: PropTypes.func,

	/** onMouseLeave action */
	onMouseLeave: PropTypes.func,

	/** Specify the type of the button */
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
	isBlock: false,
	isLoading: false,
	isDisabled: false,
	isOutlined: false,
	onClick: () => {},
	onMouseOver: () => {},
	onMouseLeave: () => {},
};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Button);
