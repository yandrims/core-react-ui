/** npm packages */
import merge from 'deepmerge';

/** theme */
import THEME from '../themes';

/** deep merge object */
export function deepMerge(originalObj, overriderObj) {
	merge(originalObj, overriderObj);
}

/** convert to rem */
export function rem(value) {
	const { baseStyle } = THEME;

	return (
		(value && `${(value / (baseStyle.fontSize || 15)).toFixed(3)}rem`) || 0
	);
}
