/** npm packages */
import React, { useEffect } from 'react';
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
import { isBottomPage } from '../../helpers/utils';

/** elements */
import Box from '../../elements/Box';
import Loader from '../../elements/Loader';

function InfiniteScroll({
	forwardRef,
	children,
	onBottomPage,
	status,
	bottomOffset,
	...rest
}) {
	const isLoading = status === 'loading';

	useEffect(() => {
		const onScrollHandler = () => {
			if (!isLoading && isBottomPage({ bottomOffset })) {
				if (onBottomPage && typeof onBottomPage === 'function') {
					onBottomPage();
				}
			}
		};
		document.addEventListener('scroll', onScrollHandler);
		return () => document.removeEventListener('scroll', onScrollHandler);
	}, []);

	return (
		<Styles ref={forwardRef} {...rest}>
			{children}
			{(isLoading && (
				<Box textAlign="center" py={3}>
					<Loader className="loader" />
				</Box>
			)) ||
				null}
		</Styles>
	);
}

InfiniteScroll.propTypes = {
	/** Global Props */
	...globalProps,

	/** Data fetch status */
	status: PropTypes.oneOf(['init', 'loading', 'success', 'error']),

	/** Trigger function */
	onBottomPage: PropTypes.func,

	/** bottom offset */
	bottomOffset: PropTypes.number,
};

InfiniteScroll.defaultProps = {
	bottomOffset: 50,
};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(InfiniteScroll);
