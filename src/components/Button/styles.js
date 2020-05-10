/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';
import { rem } from '../../helpers/utils';

/** constants */
import GLOBAL_VARIANTS from '../../constants/globalVariants';
import COLORS from '../../constants/colors';

const { STATUS, PALETTE } = COLORS;
const { COLOR_THEMES } = GLOBAL_VARIANTS;
const {
	SUCCESS,
	INFO,
	WARNING,
	DANGER,
	DISABLED,
	TRANSPARENT,
	LIGHT,
	DARK,
} = COLOR_THEMES;

const colors = ({ theme, variant, isLoading, isDisabled, isOutlined }) => {
	const {
		baseStyle: {
			colorText,
			colorPrimary,
			colorPrimaryText,
			colorDisabled,
			colorDisabledText,
			colorLight,
			colorDark,
		},
		formConfig: { borderWidth },
	} = theme;

	let btnBackgroundColor = colorPrimary;
	let btnTextColor = colorPrimaryText;
	let btnBorderColor = colorPrimary;

	if (variant) {
		switch (variant) {
			case SUCCESS:
				btnBackgroundColor = STATUS.SUCCESS;
				btnTextColor = STATUS.SUCCESS_TEXT;
				btnBorderColor = STATUS.SUCCESS;
				break;
			case INFO:
				btnBackgroundColor = STATUS.INFO;
				btnTextColor = STATUS.INFO_TEXT;
				btnBorderColor = STATUS.INFO;
				break;
			case WARNING:
				btnBackgroundColor = STATUS.WARNING;
				btnTextColor = STATUS.WARNING_TEXT;
				btnBorderColor = STATUS.WARNING;
				break;
			case DANGER:
				btnBackgroundColor = STATUS.DANGER;
				btnTextColor = STATUS.DANGER_TEXT;
				btnBorderColor = STATUS.DANGER;
				break;
			case DISABLED:
				btnBackgroundColor = colorDisabled;
				btnTextColor = colorDisabledText;
				btnBorderColor = colorDisabled;
				break;
			case TRANSPARENT:
				btnBackgroundColor = PALETTE.TRANSPARENT;
				btnTextColor = colorText;
				btnBorderColor = PALETTE.TRANSPARENT;
				break;
			case LIGHT:
				btnBackgroundColor = colorLight;
				btnTextColor = colorText;
				btnBorderColor = colorText;
				break;
			case DARK:
				btnBackgroundColor = colorDark;
				btnTextColor = PALETTE.WHITE;
				btnBorderColor = colorDark;
				break;
			default:
				btnBackgroundColor = colorPrimary;
				btnTextColor = colorPrimaryText;
				btnBorderColor = colorPrimary;
				break;
		}
	}

	if (isDisabled) {
		btnBackgroundColor = colorDisabled;
		btnTextColor = colorDisabledText;
		btnBorderColor = colorDisabled;
	}

	return `
		background-color: ${isOutlined ? btnTextColor : btnBackgroundColor};
		color: ${isOutlined ? btnBackgroundColor : btnTextColor};
		border: ${borderWidth}px solid ${btnBorderColor}
		${
			(!(isLoading || isDisabled) &&
				`
				&:hover { 
					background-color: ${btnBackgroundColor};
					color: ${btnTextColor};
					filter: brightness(110%); 
				}
				&:active { filter: brightness(90%); }
			`) ||
			''
		}
		${
			(isLoading &&
				`
					position: relative;
					color: ${PALETTE.TRANSPARENT};
					> .btn-loading {
						border: 2px solid ${PALETTE.TRANSPARENT};
						border-radius: 50%;
						border-top: 2px solid ${btnTextColor};
						border-bottom: 2px solid ${btnTextColor};
						width: 20px;
						height: 20px;
						-webkit-animation: spin 2s linear infinite;
						animation: spin 2s linear infinite;
						position: absolute;
						left: 50%;
						top: 50%;
						margin-left: -${borderWidth * 2 + 10}px;
						margin-top: -${borderWidth * 2 + 10}px;
					}
					
					@-webkit-keyframes spin {
						0% { -webkit-transform: rotate(0deg); }
						100% { -webkit-transform: rotate(360deg); }
					}
					
					@keyframes spin {
						0% { transform: rotate(0deg); }
						100% { transform: rotate(360deg); }
					}
		`) ||
			''
		}
	`;
};

const sizes = ({ theme, size }) => {
	const {
		baseStyle,
		spacing: { multiplierFactor: factor = 1 },
		formConfig: { px, py, fontSize },
	} = theme;

	const calcRem = (val) => rem(val * factor, baseStyle.fontSize);

	const btnPaddingX = px[size] || px.default;
	const btnPaddingY = py[size] || py.default;
	const btnFontSize = fontSize[size] || fontSize.default;

	return `
		padding: ${calcRem(btnPaddingY)} ${calcRem(btnPaddingX)};
		font-size: ${calcRem(btnFontSize)};
	`;
};

const mainStyle = ({
	theme,
	isBlock,
	isLoading,
	isDisabled,
	isOutlined,
	variant,
	size,
	borderRadius: customBorderRadius,
}) => {
	const {
		baseStyle: { fontSize },
		spacing: { multiplierFactor: factor = 1 },
		formConfig: { borderRadius, fontWeight },
	} = theme;

	let cursor = 'pointer';

	if (isLoading) {
		cursor = 'wait';
	}
	if (isDisabled) {
		cursor = 'not-allowed';
	}

	return `
		display: ${(isBlock && 'block') || 'inline-block'};
		width: ${(isBlock && '100%') || 'auto'};
		user-select: none;
		outline: none;
		box-shadow: none;
		transition: 0.3s;
		outline: none;
		box-sizing: border-box;
		cursor: ${cursor};
		font-family: inherit;
		font-weight: ${fontWeight};
		line-height: 1;
		border-radius: ${rem((customBorderRadius || borderRadius) * factor, fontSize)};
		letter-spacing: 0.2px;
		text-align: center;
		${colors({ theme, variant, isLoading, isDisabled, isOutlined })}
		${sizes({ theme, size })}
	`;
};

const Styles = styled.button`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
