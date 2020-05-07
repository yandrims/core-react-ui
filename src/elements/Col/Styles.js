/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles, appendStyle } from '../../helpers/style';
import { rem } from '../../helpers/utils';

const propsAlignSelfStyle = (elm) => {
	const alignConfig = {
		auto: 'auto',
		'flex-start': 'flex-start',
		'flex-end': 'flex-end',
		center: 'center',
		baseline: 'baseline',
		stretch: 'stretch',
	};

	return (alignConfig[elm] && `align-self: ${alignConfig[elm]}`) || '';
};

const getRange = (range) => {
	return 100 / (12 / range);
};

const responsiveCol = (responsive, theme = {}) => {
	const styles = [];

	if (responsive) {
		const { breakpoints } = theme;

		if (breakpoints) {
			for (const key in breakpoints) {
				if (breakpoints.hasOwnProperty(key)) {
					const breakpoint = responsive[key];
					const value = breakpoints[key];
					const { col } = breakpoint;
					if (breakpoint && col) {
						styles.push(`@media (min-width: ${value}px) {
							flex: 0 0 ${getRange(col)}%;max-width: ${getRange(col)}%;
						}`);
					}
				}
			}
		}
	}

	return appendStyle((styles && styles.length && styles.join(';')) || '');
};

const mainStyle = ({
	space,
	col,
	alignSelf,
	isAutoWidth,
	order,
	flexGrow,
	flexShrink,
	flexBasis,
	responsive,
	theme,
}) => {
	const {
		baseStyle: { fontSize },
		spacing: { multiplierFactor: factor = 1 },
	} = theme;
	const val = space * factor;

	return `
		position: relative;
		box-sizing: border-box;
		${
			(space &&
				`
				padding-left: ${rem(val, fontSize)};
				padding-right: ${rem(val, fontSize)};
				`) ||
			''
		}
		flex-basis: ${flexBasis || 0};
		flex-grow: ${flexGrow || 1};
		${(flexShrink && `flex-shrink: ${flexShrink};`) || ''}
		${(alignSelf && propsAlignSelfStyle(alignSelf)) || ''}
		${(order && `order: ${order};`) || ''}
		${(col && `flex: 0 0 ${getRange(col)}%;max-width: ${getRange(col)}%;`) || ''}
		${
			(isAutoWidth && `flex: 0 0 auto;width: auto;max-width: none;`) ||
			'width: 100%;max-width: 100%;'
		}
		${responsiveCol(responsive, theme)}
	`;
};

const Styles = styled.div`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
