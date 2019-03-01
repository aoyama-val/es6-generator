function getCombinations(xs, r) {
  if (xs.length < r) {
    return [];
  }
  if (r == 1) {
    const result = [];
    for (let x of xs) {
      result.push([x]);
    }
    return result;
  }
  const x = xs[0];
  const xs_ = xs.slice(1);
  return getCombinations(xs_, r - 1).map(comb => [x, ...comb]).concat(getCombinations(xs_, r));
}

const xs = [];
for (let i = 0; i < 50; i++) {
  xs.push(i + 1);
}

console.log(getCombinations(xs, 10))
