/** npm packages */
import merge from 'deepmerge';

/** theme */
import defaultTheme from '../themes/default';

/** deep merge object */
export function deepMerge(originalObj, overriderObj) {
	merge(originalObj, overriderObj);
}

/** convert to rem */
export function rem(value) {
	const { baseStyle } = defaultTheme;
	return (
		(value && `${(value / (baseStyle.fontSize || 15)).toFixed(3)}rem`) || 0
	);
}
