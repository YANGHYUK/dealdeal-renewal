export function range(a: number, b: number, step = 1) {
  const arr = [];

  for (let i = a; i <= b; i += step) {
    arr.push(i);
  }

  return arr;
}

export function rangeDivideValues(
  factor: number,
  fn: (n: number, d: number) => Record<number | string, string>,
) {
  return range(1, factor - 1, 1).reduce(
    (obj, n) => ({ ...obj, ...(fn?.(n, factor) ?? null) }),
    {},
  );
}

function round(n: number, place = 0) {
  return +(Math.round(+(n + 'e' + place)) + 'e-' + place);
}

export function fnDivide(n: number, d: number) {
  return { [`${n}/${d}`]: `${round((n / d) * 100, 6)}%` };
}