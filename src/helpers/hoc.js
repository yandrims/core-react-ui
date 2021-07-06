/** npm packages */
import React, { forwardRef } from 'react';
import { ThemeConsumer } from 'styled-components';

/** helpers */
import { deepMerge } from './utils';

/** theme */
import THEME from '../themes';

const withForwardRef = (Component) => {
	const Wrapper = ({ forwardedRef, ...rest }) => {
		return <Component ref={forwardedRef} {...rest} />;
	};

	return forwardRef((props, ref) => <Wrapper {...props} forwardRef={ref} />);
};

const withThemeConsumer = (Component) => (props) => {
	return (
		<ThemeConsumer>
			{(theme) => {
				const mergedTheme = theme ? deepMerge(THEME, theme) : THEME;

				return <Component {...props} theme={mergedTheme} />;
			}}
		</ThemeConsumer>
	);
};

const withGlobalProps =
	(Component) =>
	({ ariaLabel, ariaLabelledBy, dataCustom, ...rest }) => {
		return (
			<Component
				{...rest}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				data-custom={dataCustom}
			/>
		);
	};

export { withForwardRef, withThemeConsumer, withGlobalProps };
