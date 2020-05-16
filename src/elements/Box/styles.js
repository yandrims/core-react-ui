/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';

/** constants */
import COLORS from '../../constants/colors';

const mainStyle = ({
	bgColor = '',
	textColor = '',
	isBordered,
	borderWidth = 1,
	borderStyle = 'solid',
	borderColor = COLORS.PALETTE.GREY,
	borderRadius = 0,
}) => {
	return `
		${(bgColor && `background: ${bgColor};`) || ''}
		${(textColor && `color: ${textColor};`) || ''}
		border-radius: ${borderRadius}px;
		${
			(isBordered &&
				`border: ${borderWidth}px ${borderStyle} ${borderColor};`) ||
			''
		}
	`;
};

const Styles = styled.div`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
