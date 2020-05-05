/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';
import { rem } from '../../helpers/utils';

const mainStyle = ({
	space,
	alignItems,
	alignContent,
	justifyContent,
	flexDirection,
	flexWrap,
	theme,
}) => {
	const { spacing = {} } = theme;
	const factor = (spacing && spacing.multiplierFactor) || 1;
	const val = space * factor;
	return `
		display: flex;
		${(alignItems && `align-items: ${alignItems};`) || ''}
		${(alignContent && `align-content: ${alignContent};`) || ''}
		${(justifyContent && `justify-content: ${justifyContent};`) || ''}
		${(flexWrap && `flex-wrap: ${flexWrap};`) || ''}
		${(flexDirection && `flex-direction: ${flexDirection};`) || ''}
		${(space && `margin-left: -${rem(val)};margin-right: -${rem(val)};`) || ''}
	`;
};

const Styles = styled.div`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
