export const getItemByKey = (obj, key) => obj[key];

export const getAllItemsByKey = (array, key) => array.map(item => getItemByKey(item, key));

const startsWith = (str, prefix) => str.toLowerCase().startsWith(prefix.toLowerCase());

export function getValuesStartsWith(array, key, prefix) {
  return array.filter(item => startsWith(getItemByKey(item, key), prefix)).map(item => getItemByKey(item, key));
}

export function getItemsCount(array) {
  return array.length;
}

export function getItemsSum(array, key) {
  return array.reduce((acc, item) => acc + Number(getItemByKey(item, key)), 0);
}

function getItemType(item) {
  return typeof item;
}

function isNumber(item) {
  return getItemType(item) === "number";
}

function isString(item) {
  return getItemType(item) === "string";
}

function getLowestValue(a, b, key) {
  if (!getItemByKey(a, key)) return b;
  if (!getItemByKey(b, key)) return getItemByKey(a, key);
  if (isNumber(getItemByKey(a, key)) && isNumber(getItemByKey(b, key))) return getItemByKey(a, key) < getItemByKey(b, key) ? a : b;
  if (isString(getItemByKey(a, key)) && isString(getItemByKey(b, key))) return getItemByKey(a, key).length < getItemByKey(b, key).length ? a : b;
}

export function getMinValueByKey(array, key) {
  return array.reduce((acc, item) => {
    return getLowestValue(acc, item, key);
  });
}