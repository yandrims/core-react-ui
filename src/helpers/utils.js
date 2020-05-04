/** npm packages */
import merge from 'deepmerge';

/** base style */
import { FONT_SIZE } from '../../config/style';

/** deep merge object */
export function deepMerge(originalObj, overriderObj) {
	merge(originalObj, overriderObj);
}

/** convert to rem */
export function rem(value) {
	return (value && `${value / (FONT_SIZE || 15)}rem`) || 0;
}
