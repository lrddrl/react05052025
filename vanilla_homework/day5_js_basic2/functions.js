export function sum(a = 0, b = 0) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Invalid argument');
  return a + b;
}

export function sumOfAll(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'number') throw new Error('Invalid argument');
    total += args[i];
  }
  return total;
}
