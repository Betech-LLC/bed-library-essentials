"use strict";

function deepMerge(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isPlainObject(target) && isPlainObject(source)) {
    for (const key in source) {
      if (isPlainObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}

function isPlainObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export { deepMerge };
