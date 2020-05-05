import PropTypes from 'prop-types';

const globalProps = {
	/** Tab Index */
	tabIndex: PropTypes.number,

	/** Render element in different HTML tags. */
	as: PropTypes.oneOf([
		'div',
		'span',
		'p',
		'small',
		'strong',
		'b',
		'i',
		'em',
		'label',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
	]),

	/** Custom CSS */
	css: PropTypes.string,

	/** Data Custom */
	dataCustom: PropTypes.string,

	/** Margin */
	m: PropTypes.number,

	/** Margin Top-Bottom */
	my: PropTypes.number,

	/** Margin Left-Right */
	mx: PropTypes.number,

	/** Margin Top */
	mt: PropTypes.number,

	/** Margin Bottom */
	mb: PropTypes.number,

	/** Margin Left */
	ml: PropTypes.number,

	/** Margin Right */
	mr: PropTypes.number,

	/** Padding */
	p: PropTypes.number,

	/** Padding Top-Bottom */
	py: PropTypes.number,

	/** Padding Left-Right */
	px: PropTypes.number,

	/** Padding Top */
	pt: PropTypes.number,

	/** Padding Bottom */
	pb: PropTypes.number,

	/** Padding Left */
	pl: PropTypes.number,

	/** Padding Right */
	pr: PropTypes.number,

	/** Text Align */
	textAlign: PropTypes.string,

	/** Vertical Align */
	verticalAlign: PropTypes.string,

	/** Position */
	position: PropTypes.string,

	/** Display */
	display: PropTypes.string,

	/** Responsive */
	responsive: PropTypes.object,
};

export default globalProps;
