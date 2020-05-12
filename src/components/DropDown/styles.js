/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';

const mainStyle = ({ theme }) => {
	const {
		baseStyle: { fontSize },
	} = theme;

	return `
		font-size: ${fontSize}px;
		color: green;
	`;
};

const Styles = styled.div`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
