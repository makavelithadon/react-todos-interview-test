export const isDev = Boolean(process.env.NODE_ENV === "development");

export function keepOnlyNotUndefinedValues(arr) {
  return arr.filter(x => typeof x !== "undefined");
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))