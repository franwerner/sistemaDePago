export const pipe = (...functions) => (initialValue) =>
    functions.reduce((value, func) => func(value), initialValue);
