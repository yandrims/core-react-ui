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

/* 
import merge from 'deepmerge';

const isInArray = (value, array) => {
  return array.indexOf(value) > -1;
};

const deepMerge = (originalObj, overriderObj) =>
  merge(originalObj, overriderObj);

const rem = value => {
  return `${value / 16}rem`;
};

const getRandomString = () => {
  return Math.random()
    .toString(36)
    .substring(7);
};

const isElementInViewport = el => {
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
};

const getIntrinsicRatio = (width, height) => {
  return (height / width) * 100;
};

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const hexToRgba = (hex, alpha) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      alpha +
      ')'
    );
  }
  throw new Error('Bad Hex');
};

const getObjectValues = obj => {
  const res = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      res.push(obj[i]);
    }
  }
  return res;
};

export {
  isInArray,
  deepMerge,
  rem,
  getRandomString,
  isElementInViewport,
  getIntrinsicRatio,
  range,
  hexToRgba,
  getObjectValues
};


 */
