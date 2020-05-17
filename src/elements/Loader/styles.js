/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';
import { rem } from '../../helpers/utils';

/** constants */
import COLORS from '../../constants/colors';

const { PALETTE } = COLORS;

const mainStyle = ({ theme, color, size }) => {
	const {
		baseStyle: { colorPrimary, fontSize, multiplierFactor: factor = 1 },
	} = theme;

	const calcRem = (val) => rem(val * factor, fontSize);
	const loaderColor = color || colorPrimary;
	const loaderSize = size * 2.5;
	const loaderBorderSize = size * 0.4;

	return `
		display: block;
		border-radius: 50%;
		border-left: ${calcRem(loaderBorderSize)} solid ${PALETTE.TRANSPARENT};
		border-top: ${calcRem(loaderBorderSize)} solid ${loaderColor};
		border-right: ${calcRem(loaderBorderSize)} solid ${loaderColor};
		border-bottom: ${calcRem(loaderBorderSize)} solid ${loaderColor};
		width: ${calcRem(loaderSize)};
		height: ${calcRem(loaderSize)};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
		@-webkit-keyframes spin {
			0% { -webkit-transform: rotate(0deg); }
			100% { -webkit-transform: rotate(360deg); }
		}
		
		@keyframes spin {
			0% { transform: rotate(0deg); }
			100% { transform: rotate(360deg); }
		}
	`;
};

const Styles = styled.span`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
