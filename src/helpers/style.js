/** helpers */
import { rem } from './utils';

/** append style */
export function appendStyle(style) {
	return (style && `&&& { ${style} }`) || '';
}

/** custom css */
export function customCSS({ customCSS: style }) {
	return appendStyle(style);
}

/** spacing */
export function spacing({
	margin,
	marginY,
	marginX,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	padding,
	paddingY,
	paddingX,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
}) {
	const styles = [];
	const check = (elm) => typeof elm !== 'undefined';
	const direction = (elm, dir, value) => `${elm}-${dir}: ${rem(value)}`;

	/** margins */
	if (check(margin)) {
		styles.push(`margin: ${rem(margin)}`);
	}
	if (check(marginY)) {
		styles.push(direction('margin', 'top', marginY));
		styles.push(direction('margin', 'bottom', marginY));
	}
	if (check(marginX)) {
		styles.push(direction('margin', 'left', marginX));
		styles.push(direction('margin', 'right', marginX));
	}
	if (check(marginTop)) {
		styles.push(direction('margin', 'top', marginTop));
	}
	if (check(marginBottom)) {
		styles.push(direction('margin', 'bottom', marginBottom));
	}
	if (check(marginLeft)) {
		styles.push(direction('margin', 'left', marginLeft));
	}
	if (check(marginRight)) {
		styles.push(direction('margin', 'right', marginRight));
	}

	/** paddings */
	if (check(padding)) {
		styles.push(`padding: ${rem(padding)}`);
	}
	if (check(paddingY)) {
		styles.push(direction('padding', 'top', paddingY));
		styles.push(direction('padding', 'bottom', paddingY));
	}
	if (check(paddingX)) {
		styles.push(direction('padding', 'left', paddingX));
		styles.push(direction('padding', 'right', paddingX));
	}
	if (check(paddingTop)) {
		styles.push(direction('padding', 'top', paddingTop));
	}
	if (check(paddingBottom)) {
		styles.push(direction('padding', 'bottom', paddingBottom));
	}
	if (check(paddingLeft)) {
		styles.push(direction('padding', 'left', paddingLeft));
	}
	if (check(paddingRight)) {
		styles.push(direction('padding', 'right', paddingRight));
	}

	return appendStyle((styles && styles.length && styles.join(';')) || '');
}

/** alignment */
export function alignment({ textAlign, verticalAlign }) {
	const styles = [];

	/** textAlign */
	if (textAlign) {
		styles.push(`text-align: ${textAlign}`);
	}

	/** verticalAlign */
	if (verticalAlign) {
		styles.push(`vertical-align: ${verticalAlign}`);
	}

	return appendStyle((styles && styles.length && styles.join(';')) || '');
}

/** display */
export function display({ display: style }) {
	const styles = [];

	/** display */
	if (style) {
		styles.push(`display: ${style}`);
	}

	return appendStyle((styles && styles.length && styles.join(';')) || '');
}

/** common styles */
export function commonStyles(params) {
	return `
		${spacing(params)}
		${alignment(params)}
		${display(params)}
		${customCSS(params)}
	`;
}
