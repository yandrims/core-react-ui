/* eslint-disable no-lone-blocks */
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

/** style */
import Styles from './Styles';

function Container({ forwardRef, children, isFluid, ...rest }) {
	return (
		<Styles ref={forwardRef} isFluid={!!isFluid} {...rest}>
			{children}
		</Styles>
	);
}

Container.propTypes = {
	/** Full width container, spanning the entire width of the viewport. */
	isFluid: PropTypes.bool,
};

Container.defaultProps = {};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Container);
