/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';
import { rem } from '../../helpers/utils';

const mainStyle = ({ theme, isFluid }) => `
	${(!isFluid && `max-width:${theme.container.maxWidth}px;`) || ''}
	padding-right: ${rem(theme.container.padding)};
	padding-left: ${rem(theme.container.padding)};
	margin-right: auto;
	margin-left: auto;
`;

const Styles = styled.div`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
