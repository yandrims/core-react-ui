/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

/** theme */
import THEME from '../themes';

/** check if item is object */
export function isObject(item) {
	return item && typeof item === 'object' && !Array.isArray(item);
}

/** deep merge object */
export function deepMerge(originalObj, ...overriderObj) {
	if (!overriderObj.length) return originalObj;
	const source = overriderObj.shift();

	if (isObject(originalObj) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!originalObj[key]) Object.assign(originalObj, { [key]: {} });
				deepMerge(originalObj[key], source[key]);
			} else {
				Object.assign(originalObj, { [key]: source[key] });
			}
		}
	}

	return deepMerge(originalObj, ...overriderObj);
}

/** convert to rem */
export function rem(
	value,
	fontSize = (THEME && THEME.baseStyle && THEME.baseStyle.fontSize) || 15,
) {
	return (value && `${(value / fontSize).toFixed(3)}rem`) || 0;
}

/** get object value */
export function getObjectValues(obj) {
	const res = [];
	if (obj) {
		for (const i in obj) {
			if (obj.hasOwnProperty(i)) {
				res.push(obj[i]);
			}
		}
	}
	return res;
}

/** check is bottom page */
export function isBottomPage(params = {}) {
	const { bottomOffset = 50 } = params;
	const {
		body: { scrollHeight = 0, offsetHeight = 0 },
		documentElement: html,
	} = document;

	const getHeight = (elm) =>
		Math.max(elm.clientHeight, elm.scrollHeight, elm.offsetHeight);

	const height = Math.max(scrollHeight, offsetHeight, getHeight(html));
	const vh = window.innerHeight;
	const isBottom = !!(Math.ceil(vh + window.scrollY) >= height - bottomOffset);

	return isBottom;
}

/** convert hex to rgba */
export function hexToRgba(hex, alpha) {
	let c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length === 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = `0x${c.join('')}`;
		// eslint-disable-next-line no-bitwise
		return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
			',',
		)},${alpha})`;
	}
	throw new Error('Bad Hex');
}
