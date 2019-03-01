function* createCombinationGenerator(xs, r) {
  if (xs.length < r) {
    return;
  }
  if (r == 1) {
    for (let x of xs) {
      yield [x];
    }
    return;
  }
  const x = xs[0];
  const xs_ = xs.slice(1);
  for (let comb of createCombinationGenerator(xs_, r - 1)) {
    yield [x, ...comb];
  }
  for (let comb of createCombinationGenerator(xs_, r)) {
    yield comb;
  }
}

const xs = [];
for (let i = 0; i < 50; i++) {
  xs.push(i + 1);
}

const generator = createCombinationGenerator(xs, 10);
for (let comb of generator) {
  console.log(comb);
}
