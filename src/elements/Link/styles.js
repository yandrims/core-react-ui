/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';

const mainStyle = ({ theme, cursor }) => {
	const {
		baseStyle: { fontSize, colorLink },
	} = theme;

	return `
		transition: 0.3s;
		font-size: ${fontSize}px;
		text-decoration: none;
		color: ${colorLink};
		cursor: ${cursor || 'pointer'};
		&:hover {
			text-decoration: none;
			color: ${colorLink};
			filter: brightness(110%); 
		}
		&:active { 
			color: ${colorLink};
			filter: brightness(90%); 
		}
		&:visited { 
			color: ${colorLink};
		}
	`;
};

const Styles = styled.a`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
