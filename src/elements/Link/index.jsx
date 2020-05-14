/** npm packages */
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import NextLink from 'next/link';

/** style */
import Styles from './styles';

/** helpers */
import globalProps from '../../helpers/globalProps';
import {
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
} from '../../helpers/hoc';

const NEXT_PROPS_DEFAULT = {
	passHref: true,
	replace: false,
	scroll: true,
};

const ANCHOR_PROPS_DEFAULT = {
	target: '',
	title: '',
};

function Link({
	forwardRef,
	children,
	isExternal,
	link = (isExternal && '') || { pathname: '/', query: {}, asPath: '/' },
	nextProps = {},
	anchorProps = {},
	onClick,
	cursor,
	...rest
}) {
	const linkProps = (isExternal && {
		...ANCHOR_PROPS_DEFAULT,
		...anchorProps,
	}) || { ...NEXT_PROPS_DEFAULT, ...nextProps };

	return (
		(isExternal && (
			<Styles
				ref={forwardRef}
				href={link}
				cursor={cursor}
				{...linkProps}
				{...rest}
			>
				{children}
			</Styles>
		)) ||
		(onClick && typeof onClick === 'function' && (
			<Styles ref={forwardRef} onClick={onClick} cursor={cursor} {...rest}>
				{children}
			</Styles>
		)) || (
			<NextLink
				as={(typeof link === 'string' && link) || link.asPath}
				href={
					typeof link === 'string'
						? link
						: { pathname: link.pathname, query: link.query }
				}
				{...linkProps}
				ref={forwardRef}
			>
				<Styles ref={forwardRef} cursor={cursor} {...rest}>
					{children}
				</Styles>
			</NextLink>
		)
	);
}

Link.propTypes = {
	/** Global Props */
	...globalProps,

	/** Link url or next link props */
	link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

	/** External link */
	isExternal: PropTypes.bool,

	/** Next Link props, default is { passHref = true, replace = false, scroll = true } */
	nextProps: PropTypes.object,

	/** Anchor props, default is { target = '', title = '' } */
	anchorProps: PropTypes.object,

	/** onClick */
	onClick: PropTypes.func,

	/** cursor */
	cursor: PropTypes.oneOf(['pointer', 'default', 'not-allowed']),
};

Link.defaultProps = {
	isExternal: false,
	nextProps: {
		passHref: true,
		replace: false,
		scroll: true,
	},
	anchorProps: {
		target: '',
		title: '',
	},
	cursor: 'pointer',
};

export default compose(
	withForwardRef,
	withThemeConsumer,
	withGlobalProps,
)(Link);
