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

/** combine global style props */
export function combineGlobalStyles({ theme = {}, ...rest }) {
	const styles = [];

	/** spacing */
	const { baseStyle = {}, spacing = {} } = theme;
	const { fontSize } = baseStyle;
	const { multiplierFactor: factor = 1 } = spacing;

	const check = (elm) => typeof elm !== 'undefined';
	const space = (elm, pos, val) =>
		`${elm}-${pos}: ${rem(val * factor, fontSize)}`;

	/** margin */
	const { m, my, mx, mt, mb, ml, mr } = rest;
	if (check(m)) {
		styles.push(`margin: ${rem(m * factor, fontSize)}`);
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

	/** padding */
	const { p, py, px, pt, pb, pl, pr } = rest;
	if (check(p)) {
		styles.push(`padding: ${rem(p * factor, fontSize)}`);
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

	/** textAlign */
	const { textAlign } = rest;
	if (textAlign) {
		styles.push(`text-align: ${textAlign}`);
	}

	/** verticalAlign */
	const { verticalAlign } = rest;
	if (verticalAlign) {
		styles.push(`vertical-align: ${verticalAlign}`);
	}

	/** display */
	const { display } = rest;
	if (display) {
		styles.push(`display: ${display}`);
	}

	/** position */
	const { position } = rest;
	if (position) {
		styles.push(`position: ${position}`);
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
							${combineGlobalStyles(breakpoint)}
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
		${combineGlobalStyles(params)}
		${responsive(params)}
		${customCSS(params)}
	`;
}
