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
