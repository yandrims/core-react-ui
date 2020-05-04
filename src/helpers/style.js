/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/** helpers */
import { rem } from './utils';

/** append style */
export function appendStyle(style) {
	return (style && `&&& { ${style} }`) || '';
}

/** custom css */
export function customCSS({ css: styles }) {
	return appendStyle(styles);
}

/** spacing */
export function spacing({
	m,
	my,
	mx,
	mt,
	mb,
	ml,
	mr,
	p,
	py,
	px,
	pt,
	pb,
	pl,
	pr,
	theme = {},
}) {
	const factor =
		(theme && theme.spacing && theme.spacing.multiplierFactor) || 1;
	const styles = [];
	const check = (elm) => typeof elm !== 'undefined';
	const space = (elm, pos, value) => `${elm}-${pos}: ${rem(value * factor)}`;

	/** margins */
	if (check(m)) {
		styles.push(`margin: ${rem(m * factor)}`);
	}
	if (check(my)) {
		styles.push(space('margin', 'top', my));
		styles.push(space('margin', 'bottom', my));
	}
	if (check(mx)) {
		styles.push(space('margin', 'left', mx));
		styles.push(space('margin', 'right', mx));
	}
	if (check(mt)) {
		styles.push(space('margin', 'top', mt));
	}
	if (check(mb)) {
		styles.push(space('margin', 'bottom', mb));
	}
	if (check(ml)) {
		styles.push(space('margin', 'left', ml));
	}
	if (check(mr)) {
		styles.push(space('margin', 'right', mr));
	}

	/** paddings */
	if (check(p)) {
		styles.push(`padding: ${rem(p * factor)}`);
	}
	if (check(py)) {
		styles.push(space('padding', 'top', py));
		styles.push(space('padding', 'bottom', py));
	}
	if (check(px)) {
		styles.push(space('padding', 'left', px));
		styles.push(space('padding', 'right', px));
	}
	if (check(pt)) {
		styles.push(space('padding', 'top', pt));
	}
	if (check(pb)) {
		styles.push(space('padding', 'bottom', pb));
	}
	if (check(pl)) {
		styles.push(space('padding', 'left', pl));
	}
	if (check(pr)) {
		styles.push(space('padding', 'right', pr));
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

	if (style) {
		styles.push(`display: ${style}`);
	}

	return appendStyle((styles && styles.length && styles.join(';')) || '');
}

/** responsive */
export function responsive({ responsive: style, theme = {} }) {
	const styles = [];

	if (style) {
		const { breakpoints } = theme;

		if (breakpoints) {
			for (const key in breakpoints) {
				if (breakpoints.hasOwnProperty(key)) {
					const breakpoint = style[key];
					const value = breakpoints[key];
					if (breakpoint) {
						styles.push(`@media (min-width: ${value}px) {
							${spacing(breakpoint)}
							${display(breakpoint)}
						}`);
					}
				}
			}
		}
	}

	return appendStyle((styles && styles.length && styles.join(';')) || '');
}

/** common styles */
export function commonStyles(params) {
	return `
		${spacing(params)}
		${alignment(params)}
		${display(params)}
		${responsive(params)}
		${customCSS(params)}
	`;
}
