/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';
import { rem } from '../../helpers/utils';

const mainStyle = ({ theme, isFluid }) => {
	const {
		container: { maxWidth = 1366, padding = 0 },
		baseStyle: { fontSize },
	} = theme;

	return `
		${(!isFluid && `max-width:${maxWidth}px;`) || ''}
		padding-right: ${rem(padding, fontSize)};
		padding-left: ${rem(padding, fontSize)};
		margin-right: auto;
		margin-left: auto;
	`;
};

const Styles = styled.div`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
