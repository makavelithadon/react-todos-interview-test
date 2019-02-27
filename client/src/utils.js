export const isDev = Boolean(process.env.NODE_ENV === "development");

export function keepOnlyNotUndefinedValues(arr) {
  return arr.filter(x => typeof x !== "undefined");
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const contains = (searchIn, search) => {
  if (typeof searchIn === "string") {
    return searchIn.includes(search);
  } else if (Array.isArray(searchIn)) {
    return searchIn.reduce((bool, item) => item.includes(search), false);
  }
};
