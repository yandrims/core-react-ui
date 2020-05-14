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
		&:visited {
			color: ${isOutlined ? btnBackgroundColor : btnTextColor};
		}
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

const loading = ({ theme, variant, size, isLoading }) => {
	const {
		baseStyle,
		baseStyle: {
			colorText,
			colorPrimaryText,
			colorDisabledText,
			multiplierFactor: factor = 1,
		},
		formConfig: { fontSize },
	} = theme;

	const calcRem = (val) => rem(val * factor, baseStyle.fontSize);

	let btnLoaderColor = colorPrimaryText;
	const btnLoaderSize = (fontSize[size] || fontSize.default) * 2.5;
	const btnLoaderBorderSize = (fontSize[size] || fontSize.default) * 0.3;

	if (variant) {
		switch (variant) {
			case SUCCESS:
				btnLoaderColor = STATUS.SUCCESS_TEXT;
				break;
			case INFO:
				btnLoaderColor = STATUS.INFO_TEXT;
				break;
			case WARNING:
				btnLoaderColor = STATUS.WARNING_TEXT;
				break;
			case DANGER:
				btnLoaderColor = STATUS.DANGER_TEXT;
				break;
			case DISABLED:
				btnLoaderColor = colorDisabledText;
				break;
			case TRANSPARENT:
				btnLoaderColor = colorText;
				break;
			case LIGHT:
				btnLoaderColor = colorText;
				break;
			case DARK:
				btnLoaderColor = PALETTE.WHITE;
				break;
			default:
				btnLoaderColor = colorPrimaryText;
				break;
		}
	}

	return `
		${
			(isLoading &&
				`
					position: relative;
					color: ${PALETTE.TRANSPARENT};
					> .btn-loading {
						display: block;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						&:after {
							content: '';
							display: block;
							border-radius: 50%;
							border-left: ${calcRem(btnLoaderBorderSize)} solid ${PALETTE.TRANSPARENT};
							border-top: ${calcRem(btnLoaderBorderSize)} solid ${btnLoaderColor};
							border-right: ${calcRem(btnLoaderBorderSize)} solid ${btnLoaderColor};
							border-bottom: ${calcRem(btnLoaderBorderSize)} solid ${btnLoaderColor};
							width: ${calcRem(btnLoaderSize)};
							height: ${calcRem(btnLoaderSize)};
							-webkit-animation: spin 2s linear infinite;
							animation: spin 2s linear infinite;
						}
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
		${loading({ theme, variant, size, isLoading, isOutlined })}
	`;
};

const Styles = styled.button`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
