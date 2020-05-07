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
	const {
		baseStyle: { fontSize },
		spacing: { multiplierFactor: factor = 1 },
	} = theme;
	const val = space * factor;
	return `
		display: flex;
		${(alignItems && `align-items: ${alignItems};`) || ''}
		${(alignContent && `align-content: ${alignContent};`) || ''}
		${(justifyContent && `justify-content: ${justifyContent};`) || ''}
		${(flexWrap && `flex-wrap: ${flexWrap};`) || ''}
		${(flexDirection && `flex-direction: ${flexDirection};`) || ''}
		${
			(space &&
				`
				margin-left: -${rem(val, fontSize)};
				margin-right: -${rem(val, fontSize)};
				`) ||
			''
		}
	`;
};

const Styles = styled.div`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
