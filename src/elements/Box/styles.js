/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';

/** constants */
import COLORS from '../../constants/colors';

const mainStyle = ({
	theme,
	customBackground = '',
	customColor = '',
	isBordered,
	borderWidth = 1,
	borderStyle = 'solid',
	borderColor = COLORS.PALETTE.GREY,
	borderRadius = 0,
}) => {
	const {
		container: { padding },
	} = theme;

	return `
		padding: ${padding}px;
		${(customBackground && `background: ${customBackground};`) || ''}
		${(customColor && `color: ${customColor};`) || ''}
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
