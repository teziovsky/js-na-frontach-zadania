export function getItemByKey(obj, key) {
  return obj[key];
}

export function getAllItemsByKey(array, key) {
  return array.map(item => item[key]);
}

export function getValuesStartsWith(array, key, value) {
  return array.filter(item => item[key].toLowerCase().startsWith(value)).map(item => item[key]);
}

export function getItemsCount(array) {
  return array.length;
}

export function getItemsSum(array, key) {
  return array.reduce((acc, item) => acc + parseInt(item[key]), 0);
}

export function getMinValue(array, key) {
  return array.reduce((acc, item) => {
    if (typeof item[key] === "string") {
      return acc[key].length < item[key].length ? acc : item;
    }

    if (typeof item[key] === "number") {
      return acc[key] < item[key] ? acc : item;
    }

    return acc;
  });
}