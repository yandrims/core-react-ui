/** npm packages */
import styled from 'styled-components';

/** helpers */
import { commonStyles } from '../../helpers/style';
import { rem } from '../../helpers/utils';

/** constants */
import COLORS from '../../constants/colors';

const TEXT_CONFIG = {
	fontWeight: {
		light: 300,
		regular: 400,
		semiBold: 600,
		bold: 700,
		extraBold: 800,
	},
};

const { PALETTE } = COLORS;

const mainStyle = ({
	theme,
	as: tag,
	colorVariant,
	color,
	sizeVariant,
	textStyle,
	textTransform,
	textWeight,
	textSize,
	isTruncated,
	truncatedMaxLine,
}) => {
	const {
		baseStyle: { fontSize, colorText },
		spacing: { multiplierFactor: factor = 1 },
		headingFontSizes,
		textFontSizes,
	} = theme;

	/** text size */
	let textFontSize;

	if (sizeVariant && textFontSizes[sizeVariant]) {
		textFontSize = rem(textFontSizes[sizeVariant] * factor, fontSize);
	}

	if (tag) {
		if (headingFontSizes && headingFontSizes[tag]) {
			textFontSize = rem(headingFontSizes[tag] * factor, fontSize);
		} else if (tag === 'small') {
			textFontSize = rem(fontSize * 0.75, fontSize);
		}
	}

	if (textSize) {
		textFontSize = rem(textSize, fontSize);
	}

	/** text color */
	let textColor = colorText;
	if (colorVariant && typeof colorVariant === 'string') {
		const colorPalette = colorVariant.toUpperCase();
		if (colorPalette && PALETTE[colorPalette]) {
			textColor = PALETTE[colorPalette];
		}
	}

	if (color) {
		textColor = color;
	}

	return `
		margin: 0;
		color: ${textColor};
		${(textFontSize && `font-size: ${textFontSize};`) || ''}
		${(textStyle && `font-style: ${textStyle};`) || ''}
		${(textTransform && `text-transform: ${textTransform};`) || ''}
		${
			(textWeight &&
				TEXT_CONFIG.fontWeight[textWeight] &&
				`font-weight: ${TEXT_CONFIG.fontWeight[textWeight]};`) ||
			''
		}
		${(isTruncated && truncatedMaxLine && truncateStyle(truncatedMaxLine)) || ''}
	`;
};

const truncateStyle = (maxLine) => `
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${maxLine};
  overflow: hidden;
`;

const Styles = styled.span`
	${mainStyle}
	${commonStyles}
`;

export default Styles;
