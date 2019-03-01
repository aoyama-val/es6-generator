////////////////////////////////////////////////////////////////////////////////
//   二重再帰でない版
////////////////////////////////////////////////////////////////////////////////

function getCombinations(xs, r) {
  let result = [];
  for (let i = 0; i < xs.length; i++) {
    if (r == 1) {
      result.push([xs[i]]);
    } else {
      const xs_ = xs.slice(i + 1);
      const combs = getCombinations(xs_, r - 1);
      result = result.concat(combs.map(comb => [xs[i], ...comb]));
    }
  }
  return result;
}

console.log(getCombinations([1, 2, 3, 4], 2));
